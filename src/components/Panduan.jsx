import "../styles/panduan.css"
import React from 'react'
import { Container } from 'react-bootstrap'
import Garismerah from "./Garismerah"
import wayang1 from "../img/wayang1.png"

const Panduan = () => {
  return (
      <Container>
        <img src={wayang1} alt="" className="imgwayang" />
    <div style={{paddingTop:"100px"}}>
      <div>
        <h1  className='text-center' style={{fontSize:"36px", fontWeight:"600"}}>Panduan  memesan tur paket budaya di NusaTur</h1>
        <p  className='text-center' style={{fontSize:"24px", fontWeight:"500"}}>Bingung cara memesan? Lihat panduan dibawah ini...</p>
        <Garismerah />
        <div className="grid-panduan">

            <div className="shapelayanan" />
            <div className="circle" >
                <p style={{
                    width:"395px", 
                    position:"absolute",
                    left:"420px",
                    fontSize:"20px"


                }}>Tentukan destinasi yang anda inginkan</p>
            </div>
            <div className="circle">
                <p style={{
                    width:"395px", 
                    position:"absolute",
                    left:"870px",
                    fontSize:"20px"


                }}>Login ke website NusaTur </p>
            </div>
            <div className="circle" >
                <p style={{
                    width:"395px", 
                    position:"absolute",
                    left:"535px",
                    fontSize:"20px"


                }}>Buka halaman destinations</p>
            </div>
            <div className="circle" >
                <p style={{
                    width:"500px", 
                    position:"absolute",
                    left:"870px",
                    fontSize:"20px"
                }}>Pilih wilayah destinasi yang sudah anda tentukan</p>
            </div>
            <div className="circle" >
                <p style={{
                    width:"550px", 
                    position:"absolute",
                    left:"260px",
                    fontSize:"20px"
                }}>Pilih paket tur wisata budaya lokal yang anda inginkan</p>
            </div>
            <div className="circle" >
                <p style={{
                    width:"550px", 
                    position:"absolute",
                    left:"870px",
                    fontSize:"20px"
                }}>Mengisi formulir pemesanan paket wisata budaya</p>
            </div>
            <div className="circle">
                <p style={{
                    width:"300px", 
                    position:"absolute",
                    left:"560px",
                    fontSize:"20px"
                }}>Melakukan pembayaran</p>
            </div>
            <div className="circle" >
                <p style={{
                    width:"518px", 
                    position:"absolute",
                    left:"870px",
                    fontSize:"20px"

                }}>Menunggu konfirmasi email bukti pemesanan serta
                    bukti pembayaran</p>
            </div>

        </div>

      </div>

    </div>

    </Container>
  )
}

export default Panduan
