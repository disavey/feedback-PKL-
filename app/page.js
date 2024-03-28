"use client";
import React from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import Top from "../app/components/Top";
import Worker from "./components/Worker";
import AssessmentRatings from "./Layouts/AssessmentRatings";
import Suggestion from "./components/Suggestion";

export default function Page() {
  return (
    <>
      <div className="mx-auto ssl:w-4/5 max:w-2/5 p-9 ">
        <Top />
        <div className="mt-10">
          <Worker>SALES</Worker>
          <AssessmentRatings>Penguasaan Produk</AssessmentRatings>
          <AssessmentRatings>Penampilan</AssessmentRatings>
          <AssessmentRatings>Komunikasi</AssessmentRatings>
          <AssessmentRatings>Respon</AssessmentRatings>
          <div className="mt-4 border-b-4 border-blue-800"></div>

          <div className="mt-10">
            <Worker>PRODUCT / LICENSE</Worker>
            <AssessmentRatings>
              Kesesuaian barang/lisensi
              <br /> yang diterima
            </AssessmentRatings>
            <AssessmentRatings>Ketepatan waktu pengiriman</AssessmentRatings>
            <AssessmentRatings>Kondisi barang/lisensi</AssessmentRatings>
            <AssessmentRatings>
              Kesesuaian jumlah barang/lisensi
            </AssessmentRatings>
            <div className="mt-4 border-b-4 border-blue-800"></div>
          </div>

          <div className="mt-10">
            <Worker>PROJECT MANAGER</Worker>
            <AssessmentRatings>Pelaksanaan Project</AssessmentRatings>
            <AssessmentRatings>Koordinasi</AssessmentRatings>
            <AssessmentRatings>Penampilan</AssessmentRatings>
            <AssessmentRatings>Komunikasi</AssessmentRatings>
            <div className="mt-4 border-b-4 border-blue-800"></div>
          </div>

          <div className="mt-10">
            <Worker>ENGINEER</Worker>
            <AssessmentRatings>Kesesuaian Kualifikasi</AssessmentRatings>
            <AssessmentRatings>Kemampuan Teknis</AssessmentRatings>
            <AssessmentRatings>Penampilan</AssessmentRatings>
            <AssessmentRatings>Komunikasi</AssessmentRatings>
            <AssessmentRatings>Respon</AssessmentRatings>
            <AssessmentRatings>Laporan</AssessmentRatings>
            <AssessmentRatings>
              Personil Backup <br /> (Jika ada)
            </AssessmentRatings>
            <div className="mt-4 border-b-4 border-blue-800"></div>
          </div>
          <div className="mt-10">
            <Worker>IMPLEMENTATION & MAINTENANCE</Worker>
            <AssessmentRatings>Pelaksanaan Implementasi</AssessmentRatings>
            <AssessmentRatings>Respon service desk</AssessmentRatings>
            <AssessmentRatings>Pemenuhan SLA</AssessmentRatings>
            <AssessmentRatings>Layanan bantuan</AssessmentRatings>
            <AssessmentRatings>Laporan</AssessmentRatings>
            <div className="mt-4 border-b-4 border-blue-800"></div>
          </div>

          <Suggestion />
        </div>
      </div>
    </>
  );
}
