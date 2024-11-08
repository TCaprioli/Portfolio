import { useEffect, useState } from "react";
import { Playlist, TrackItem } from "@spotify/web-api-ts-sdk";

export const Spotify = () => {
  const [token, setToken] = useState<string | null>(null);
  const [playlist, setPlaylist] = useState<{
    data: Playlist | null;
    error: unknown | null;
  } | null>(null);

  useEffect(() => {
    getToken(setToken);
  }, []);

  const renderPlaylist = () => {
    if (playlist === null) return;
    if (playlist?.data !== null) {
      return (
        <div>
          <div>
            <h2>Favorite current playlist</h2>
            <a
              href={playlist?.data.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              {
                /**
                 * images[0]: 640x640
                 * images[1]: 300x300
                 * images[2]: 60x60
                 */
                <img
                  src={playlist?.data.images[1].url}
                  alt={"playlist images"}
                  height={playlist?.data.images[1].height}
                  width={playlist?.data.images[1].width}
                />
              }
              <h2>{playlist?.data.name}</h2>
            </a>
          </div>
        </div>
      );
    } else if (playlist?.error) {
      console.error(playlist.error);
      return <p>Failed to fetch playlist</p>;
    } else {
      return;
    }
  };

  return (
    <div>
      {renderPlaylist()}
      <button onClick={() => getPlaylist({ token: token ?? "", setPlaylist })}>
        Get Playlist
      </button>
    </div>
  );
};

async function getToken(
  setToken: React.Dispatch<React.SetStateAction<string | null>>
): Promise<unknown> {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_secret", import.meta.env.VITE_SPOTIFY_CLIENT_SECRET);
  params.append("client_id", import.meta.env.VITE_SPOTIFY_CLIENT_ID);

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "Post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });
    if (response.ok) {
      const data = await response.json();
      setToken(data["access_token"]);
    } else {
      const resp = await response.json();
      throw new Error(resp["error"]["message"]);
    }
  } catch (error) {
    return error;
  }
}
async function getPlaylist(args: {
  token: string;
  setPlaylist: React.Dispatch<
    React.SetStateAction<{
      data: Playlist | null;
      error: unknown | null;
    } | null>
  >;
}): Promise<void> {
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/playlists/0kS1JIWIkppWIHM9Nkwe1x",
      {
        headers: {
          Authorization: "Bearer " + args.token,
        },
      }
    );

    if (response.ok) {
      const data: Playlist<TrackItem> = await response.json();
      args.setPlaylist({ data, error: null });
    } else {
      const resp = await response.json();
      throw new Error(resp["error"]["message"]);
    }
  } catch (error) {
    args.setPlaylist({ error, data: null });
  }
}
