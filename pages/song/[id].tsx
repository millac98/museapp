'use client';

import HeaderComponent from "../../components/Header";
import styles from '../../styles/Home.module.css';
import { useSongs } from "../../shared/context/songs.context";
import SearchComponent from "../../components/Search";
import { useEffect, useState } from "react";
import { getSong } from "../../shared/services/SongsService";
import { useRouter } from "next/router";
import PlayerComponent from "../../components/Player";
import CardComponent from "../../components/Card";

export default function Song() {
  const { state } = useSongs();
  const router = useRouter();
  const [songDetails, setSongDetails] = useState(null);
  const [relatedSongs, setRelatedSongs] = useState<number[]>([]);

  const fetchSong = async () => {
    const response = await getSong(router?.query?.id?.toString());

    setSongDetails(response);
  }

  useEffect(() => {
    if (router?.query?.id) {
      fetchSong();
    }
  }, [router?.query?.id])

  useEffect(() => {
    const related = state?.songs?.filter((song) =>
      songDetails?.related?.includes(song.id)
    );
    setRelatedSongs(related)
  }, [songDetails]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state?.favorites));
  }, [state?.favorites])

  return (
    <div className={styles.container}>
      <HeaderComponent>
        <SearchComponent />
      </HeaderComponent>
      <main style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundSize: 'contain',
        backgroundImage: `linear-gradient(90deg, #12303B 0%, rgba(18, 48, 59, 0.00) 100%), url("/assets/images/${songDetails?.song?.files?.poster}")`,
      }}>
        <div style={{display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        }}>
          {songDetails && (
            <div style={{ margin: '70px 0 40px', display: 'flex', flexDirection: 'column', gap: 90 }}>
              <PlayerComponent songDetails={songDetails} />
              <section>
                <p style={{ color: "rgba(255, 255, 255, 0.70)", margin: '0 0 20px', fontWeight: 'medium' }}>Other albums</p>
                <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap', }}>
                  {relatedSongs.map((song) => (
                    <CardComponent key={song.id} song={song} />
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Nokora', 'ArticulatCF', sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div >
  )
};