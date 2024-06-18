"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "autoclaves",
      [
        {
          id: "A1",
          marca: "A",
          vol_total: 102,
          vol_util: 81,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "A2",
          marca: "A",
          vol_total: 145,
          vol_util: 96,
          tempo_total_ciclo: 53,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "A3",
          marca: "A",
          vol_total: 200,
          vol_util: 144,
          tempo_total_ciclo: 53,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "A4",
          marca: "A",
          vol_total: 255,
          vol_util: 192,
          tempo_total_ciclo: 53,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "A5",
          marca: "A",
          vol_total: 322,
          vol_util: 216,
          tempo_total_ciclo: 56,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "A6",
          marca: "A",
          vol_total: 444,
          vol_util: 324,
          tempo_total_ciclo: 56,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "A7",
          marca: "A",
          vol_total: 566,
          vol_util: 432,
          tempo_total_ciclo: 56,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "A8",
          marca: "A",
          vol_total: 704,
          vol_util: 540,
          tempo_total_ciclo: 58,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "A9",
          marca: "A",
          vol_total: 878,
          vol_util: 628,
          tempo_total_ciclo: 55,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "B1",
          marca: "B",
          vol_total: 110,
          vol_util: 85,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "B2",
          marca: "B",
          vol_total: 200,
          vol_util: 150,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "B3",
          marca: "B",
          vol_total: 263,
          vol_util: 135,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "B4",
          marca: "B",
          vol_total: 370,
          vol_util: 324,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "B5",
          marca: "B",
          vol_total: 418,
          vol_util: 370,
          tempo_total_ciclo: 55,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "B6",
          marca: "B",
          vol_total: 542,
          vol_util: 432,
          tempo_total_ciclo: 55,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "B7",
          marca: "B",
          vol_total: 716,
          vol_util: 574,
          tempo_total_ciclo: 60,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "B8",
          marca: "B",
          vol_total: 891,
          vol_util: 846,
          tempo_total_ciclo: 80,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "C1",
          marca: "C",
          vol_total: 100,
          vol_util: 100,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "C2",
          marca: "C",
          vol_total: 205,
          vol_util: 205,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "C3",
          marca: "C",
          vol_total: 300,
          vol_util: 300,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "C4",
          marca: "C",
          vol_total: 333,
          vol_util: 330,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "C5",
          marca: "C",
          vol_total: 474,
          vol_util: 470,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "C6",
          marca: "C",
          vol_total: 614,
          vol_util: 609,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "C7",
          marca: "C",
          vol_total: 755,
          vol_util: 748,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "C8",
          marca: "C",
          vol_total: 910,
          vol_util: 902,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "D1",
          marca: "D",
          vol_total: 167,
          vol_util: 133.6,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "D2",
          marca: "D",
          vol_total: 252,
          vol_util: 201.6,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "D3",
          marca: "D",
          vol_total: 285,
          vol_util: 216,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "D4",
          marca: "D",
          vol_total: 321,
          vol_util: 256.8,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "D5",
          marca: "D",
          vol_total: 445,
          vol_util: 324,
          tempo_total_ciclo: 60,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "D6",
          marca: "D",
          vol_total: 578,
          vol_util: 432,
          tempo_total_ciclo: 60,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "D7",
          marca: "D",
          vol_total: 773,
          vol_util: 540,
          tempo_total_ciclo: 60,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "D8",
          marca: "D",
          vol_total: 892,
          vol_util: 648,
          tempo_total_ciclo: 60,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "E1",
          marca: "E",
          vol_total: 304,
          vol_util: 108,
          tempo_total_ciclo: 40,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "E2",
          marca: "E",
          vol_total: 364,
          vol_util: 216,
          tempo_total_ciclo: 40,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "E3",
          marca: "E",
          vol_total: 436,
          vol_util: 324,
          tempo_total_ciclo: 45,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "E4",
          marca: "E",
          vol_total: 523,
          vol_util: 432,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "E5",
          marca: "E",
          vol_total: 741,
          vol_util: 540,
          tempo_total_ciclo: 55,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "E6",
          marca: "E",
          vol_total: 109,
          vol_util: 108,
          tempo_total_ciclo: 40,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "E7",
          marca: "E",
          vol_total: 250,
          vol_util: 162,
          tempo_total_ciclo: 40,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "E8",
          marca: "E",
          vol_total: 575,
          vol_util: 324,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "E9",
          marca: "E",
          vol_total: 767,
          vol_util: 432,
          tempo_total_ciclo: 55,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "E10",
          marca: "E",
          vol_total: 959,
          vol_util: 540,
          tempo_total_ciclo: 60,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "E11",
          marca: "E",
          vol_total: 449,
          vol_util: 324,
          tempo_total_ciclo: 45,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 20,
        },
        {
          id: "E12",
          marca: "E",
          vol_total: 587,
          vol_util: 432,
          tempo_total_ciclo: 50,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 12,
        },
        {
          id: "E13",
          marca: "E",
          vol_total: 725,
          vol_util: 540,
          tempo_total_ciclo: 59,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 5,
        },
        {
          id: "F1",
          marca: "F",
          vol_total: 449,
          vol_util: 324,
          tempo_total_ciclo: 47,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 10,
        },
        {
          id: "F2",
          marca: "F",
          vol_total: 584,
          vol_util: 432,
          tempo_total_ciclo: 52,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 10,
        },
        {
          id: "F3",
          marca: "F",
          vol_total: 764,
          vol_util: 540,
          tempo_total_ciclo: 57,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 10,
        },
        {
          id: "F4",
          marca: "F",
          vol_total: 899,
          vol_util: 648,
          tempo_total_ciclo: 62,
          tempo_carga_desc: 10,
          tempo_teste_db: 30,
          tempo_aquecimento: 10,
        }
      ], {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('autoclaves', null, {});
  },
};
