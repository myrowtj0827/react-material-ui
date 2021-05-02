import React from 'react';
import { useHistory } from "react-router";
import {
    Button,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';

export default function Home() {
    const history = useHistory();
    const onClick = () => {
        history.push('/calculator');
    };
    const data1 = [9, 20, 19, 19, 19, 13];
    const data2 = [25, 28, 20, 27];
    const data3 = [11, 35, 26, 15];
    const data4 = [48, 52];
    const data5 = [41, 59];
    const commit1 = ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74'];
    const commit2 = ['līdz 300', '301-600', '601 un vairāk', 'NA'];
    const commit3 = ['pašnodarbinātais uzņēmējs', 'bāltas apkakllītes', 'zīlas apkakllītes', 'pensionāri'];
    const commit4 = ['vīrietis', 'sieviete'];
    const commit5 = ['latvietis', 'cita tautība'];

    function createData(grupa, reģions, pasta, nedēļā, gadā) {
        return { grupa, reģions, pasta, nedēļā, gadā };
    }

    const rows = [
        createData('1 Grupa', 'TOP apmeklētākās Rīgas pasta nodaļas', '13', '34 896', '1 849 486'),
        createData('2 Grupa', 'Pārējās Rīgas pasta nodaļas', '28', '63 147', '3 348 228'),
        createData('3 Grupa', 'Lielākās reģionu pasta nodaļas', '191', '165 600', '8 776 798'),
        createData('4 Grupa', 'Pērējās reģionu pasta nodaļas', '154', '25 227', '1 337 032'),
    ];

    const product = [
        {
            title: 'Ekrāni pasta nodaļās',
            contents: [
                {item: '15 sekunžu klips'},
                {item: 'Rotācijā kopā 12 klipi'},
                {item: '1 Grupa', amount: '30.00'},
                {item: '2 Grupa', amount: '20.00'},
                {item: '3 Grupa', amount: '20.00'},
            ]
        },
        {
            title: 'Kases sistēmu ekrāni',
            contents: [
                {item: 'EPS, AI'},
                {item: 'Attēla izmērs 1000x600 px'},
                {item: '15 sek. izvietojums'},
                {item: 'Kopā rotācijā 12 gab'},
                {item: 'Visas pasta pakalpojumu sniegšanas vietas. \n' +
                        'Nav iespējams selektēt!', amount: '350.00'},
            ]
        },
        {
            title: 'A2 plakāti',
            contents: [
                {item: 'Plakātu formāts A2 vertikāls – izmērs 420x594 mm'},
                {item: '1 Grupa', amount: '7.50'},
                {item: '2 Grupa', amount: '4.25'},
                {item: '3 Grupa', amount: '3.75'},
                {item: '4 Grupa', amount: '1.25'},
            ]
        },
        {
            title: 'Bukleti / leafleti (svars līdz 50 gr.)',
            contents: [
                {item: 'Bukletu maksimālais formāts A4 – izmērs 210x297mm'},
                {item: '1 Grupa', amount: '5.00'},
                {item: '2 Grupa', amount: '2.50'},
                {item: '3 Grupa', amount: '1.75'},
                {item: '4 Grupa', amount: '0.75'},
            ]
        },
        {
            title: 'Bukleti / leafleti (svars 51 gr. un vairāk)',
            contents: [
                {item: 'Bukletu maksimālais formāts A4 – izmērs 210x297mm'},
                {item: '1 Grupa', amount: '7.50'},
                {item: '2 Grupa', amount: '3.00'},
                {item: '3 Grupa', amount: '2.25'},
                {item: '4 Grupa', amount: '1.00'},
            ]
        },
        {
            title: 'Svārstekļa izvietojums kases zonā',
            contents: [
                {item: 'Svārstekļa maksimālais izmērs \n' +
                        '130 x 130mm'},
                {item: '1 Grupa', amount: '4.00'},
                {item: '2 Grupa', amount: '2.00'},
                {item: '3 Grupa', amount: '1.75'},
                {item: '4 Grupa', amount: '1.00'},
            ]
        },
        {
            title: 'Mazais stends',
            contents: [
                {item: 'Garums 70 cm, platums 30 cm, augstums 50 cm'},
                {item: 'Lespējams izvēlēties jebkuru pasta pakalpojumu sniegšanas vietu. ', amount: '10.00'},
            ]
        },
    ];
    const reklams_list = [
        'Pieeja plašai auditorijai?', 'A2 plakātu izvietošana?', 'Bukletu izvietošana?', 'Svārstekļu izvietošana kases zonās?',
        'Reklāma pasta nodaļu monitoros?', 'Mazo stendu izvietošana?', 'Nestandarta reklāmas sniegšana', 'Reklāmas izvietošanas pakalpojumu kopējie nosacījumi?'];

    return (
        <>
            <section className="home-body">
                {/*  Introducing  */}
                <Grid container className="contents-center pt-70" spacing={6}>
                    <Grid item className="first-bg" xs={6}>
                        <div className="txt-body">
                            <div className="txt-48 txt-line-60 txt-800 col-title">
                                Vēl efektīvākas reklāmas kampaņas kopā ar Latvijas Pastu!
                            </div>
                            <div className="pt-32 txt-18 txt-line-27 txt-400 col-grey-black">
                                Izmantojiet iespēju izvietot reklāmas bukletus, plakātus, stendus un video rullīšus pasta pakalpojumu sniegšanas vietās un sasniedziet vēlamo mērķauditoriju īstajā brīdī
                            </div>
                            <div className="pt-56">
                                <Button
                                    className="txt-16 txt-line-27 txt-800 btn-bg-color"
                                    onClick={onClick}
                                >
                                    Aprēķini kampaņas cenu tagad
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className="first-bg" xs={6}>
                        <div className="txt-body">
                            <div className="right-bg bg-set">
                            </div>
                        </div>
                    </Grid>
                </Grid>

                {/*  3 icons  */}
                <Grid container className="contents-center pt-123" spacing={4}>
                    <Grid item xs={4}>
                        <div className="icons-grid">
                            <div className="icons-circle">
                                <img className="icon-size" src={require("../assets/img/mail-box.png")} alt="icon 1" />
                            </div>
                            <div className="pt-24 txt-14 txt-700 txt-line-18 col-main-black opacity-30">
                                Pasta nodaļas Latvijas
                            </div>
                            <div className="pt-32 txt-36 txt-800 txt-line-20 col-title">
                                388
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="icons-grid">
                            <div className="icons-circle">
                                <img className="icon-size" src={require("../assets/img/nedela.png")} alt="icon 2" />
                            </div>
                            <div className="pt-24 txt-14 txt-700 txt-line-18 col-main-black opacity-30">
                                Apmeklētāju skaits gadā
                            </div>
                            <div className="pt-32 txt-36 txt-800 txt-line-20 col-title">
                                15 311 344
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="icons-grid">
                            <div className="icons-circle">
                                <img className="icon-size" src={require("../assets/img/nedela.png")} alt="icon 3" />
                            </div>
                            <div className="pt-24 txt-14 txt-700 txt-line-18 col-main-black opacity-30">
                                Apmeklētāju skaits nedēļā
                            </div>
                            <div className="pt-32 txt-36 txt-800 txt-line-20 col-title">
                                288 897
                            </div>
                        </div>
                    </Grid>
                </Grid>

                {/*  Production  */}
                <Grid container className="contents-center pt-140">
                    <Grid item className="pr-70 first-bg" xs={6}>
                        <div className="txt-body">
                            <div className="product-bg bg-set" />
                            <div className="img-bottom-dot">
                                <img src={require("../assets/img/header-bg-left.png")} className="bottom-img" alt=""/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className="first-bg" xs={6}>
                        <Grid className="txt-body">
                            <Grid className="txt-32 txt-800 txt-line-42 col-title">
                                Kāpēc izvietot reklāmu pasta pakalpojumu sniegšanas vietās?
                            </Grid>

                            <Grid className="justify-left icons-4 pt-48">
                                <div className="small-icon-grid">
                                    <img className="icon-size" src={require("../assets/img/icon-2.png")} alt="icon" />
                                </div>
                                <div className="pl-24">
                                    <div className="txt-18 txt-700 txt-line-27 col-main-black">
                                        Pieeja plašai auditorijai
                                    </div>
                                    <div className="pt-8 txt-14 txt-400 txt-line-24 col-grey-black">
                                        Gandrīz puse Latvijas iedzīvotāju vismaz reizi nedēļā apmeklē kādu no pasta nodaļām
                                    </div>
                                </div>
                            </Grid>

                            <Grid className="justify-left icons-4 pt-40">
                                <div className="small-icon-grid">
                                    <img className="icon-size" src={require("../assets/img/icon-1.png")} alt="icon" />
                                </div>
                                <div className="pl-24">
                                    <div className="txt-18 txt-700 txt-line-27 col-main-black">
                                        Reklāma konkrētā reģionā
                                    </div>
                                    <div className="pt-8 txt-14 txt-400 txt-line-24 col-grey-black">
                                        Šobrīd visā Latvijā ir 388 pasta nodaļas, kas sniedz iespēju uzrunāt jums vēlamās teritorijas iedzīvotājus.
                                    </div>
                                </div>
                            </Grid>

                            <Grid className="justify-left icons-4 pt-40">
                                <div className="small-icon-grid">
                                    <img className="icon-size" src={require("../assets/img/icon-3.png")} alt="icon" />
                                </div>
                                <div className="pl-24">
                                    <div className="txt-18 txt-700 txt-line-27 col-main-black">
                                        Precīzi atlasāma mērķauditorija
                                    </div>
                                    <div className="pt-8 txt-14 txt-400 txt-line-24 col-grey-black">
                                        Piedāvājam iespēju atlasīt pasta nodaļas pēc vēlamā apmeklētāju profila (jaunie vecāki; līguma klienti, PNS, preču pirkšana).
                                    </div>
                                </div>
                            </Grid>

                            <Grid className="justify-left icons-4 pt-40">
                                <div className="small-icon-grid">
                                    <img className="icon-size" src={require("../assets/img/icon-4.png")} alt="icon" />
                                </div>
                                <div className="pl-24">
                                    <div className="txt-18 txt-700 txt-line-27 col-main-black">
                                        Iespēja izvietot video reklāmu
                                    </div>
                                    <div className="pt-8 txt-14 txt-400 txt-line-24 col-grey-black">
                                        Šobrīd video satura reklāmām esam uzstādījuši 592 ekrānus, kuru kopējā auditorija nedēļā ir 290 000 iedzīvotāju.
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Stick */}
                <Grid className="pt-140 align-c txt-32 txt-800 txt-line-42 col-title">
                    Sasniedzamās auditorijas profils
                </Grid>

                <Grid container className="pt-113" spacing={10}>
                    {/* stick 1 */}
                    <Grid item className="first-stick" xs={6}>
                        <Grid className="align-r justify-end mobile-center">
                            {
                                data1 && data1.map((item, key) => {
                                    let height = 140;
                                    let opacity = 1;
                                    let radio = item / Math.max(...data1);
                                    if (radio !== 1) {
                                        height = height * radio;
                                        opacity = Math.ceil(opacity * radio * 8) / 10;
                                    }
                                    return (
                                        <div className="bottom-p txt-12 txt-line-15 txt-600" key={"stick-1-" + key}>
                                            <div className="pb-8 col-gray-1 align-c">
                                                {item}%
                                            </div>
                                            <div className="stick-box mobile-stick" style={{height: height, opacity: opacity}} />
                                            <div className="pt-8 col-gray-2 align-c">
                                                {commit1[key]}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                        <Grid className="pt-35 txt-18 txt-line-22 txt-700 col-title txt-right-p">
                            Vecums
                        </Grid>
                    </Grid>
                    {/* stick 2 */}
                    <Grid item className="second-stick" xs={6}>
                        <Grid className="justify-center">
                            {
                                data2 && data2.map((item, key) => {
                                    let height = 140;
                                    let opacity = 1;
                                    let radio = item / Math.max(...data2);
                                    if (radio !== 1) {
                                        height = height * radio;
                                        opacity = Math.ceil(opacity * radio * 8.4) / 10;
                                    }
                                    return (
                                        <div className="bottom-p txt-12 txt-line-15 txt-600" key={"stick-2-" + key}>
                                            <div className="pb-8 col-gray-1 align-c">
                                                {item}%
                                            </div>
                                            <div className="stick-box" style={{height: height, opacity: opacity}} />
                                            <div className={key === 2 ? "pt-8 col-gray-2 align-c txt-bottom" : "pt-8 col-gray-2 align-c"}>
                                                {commit2[key]}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                        <Grid className="align-c pt-35 txt-18 txt-line-22 txt-700 col-title stick-txt-width">
                            Lenākumi uz vienu gimenes locekli mēnesī (Eur)
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className="pt-132 flex-space three-stick">
                    {/* stick 3 */}
                    <Grid>
                        <Grid className="justify-center">
                            {
                                data3 && data3.map((item, key) => {
                                    let height = 140;
                                    let opacity = 1;
                                    let radio = item / Math.max(...data3);
                                    if (radio !== 1) {
                                        height = height * radio;
                                        opacity = Math.ceil(opacity * radio * 9) / 10;
                                    }
                                    return (
                                        <div className="bottom-p txt-600" key={"stick-3-" + key}>
                                            <div className="pb-8 txt-12 txt-line-15 col-gray-1 align-c">
                                                {item}%
                                            </div>
                                            <div className="stick-box" style={{height: height, opacity: opacity}} />
                                            <div
                                                className={
                                                    key === 0 || key === 1 ?
                                                        "pt-8 txt-8 txt-line-10 col-gray-2 align-c txt-bottom-10"
                                                        :
                                                        "pt-8 txt-8 txt-line-10 col-gray-2 align-c"
                                                }>
                                                {commit3[key]}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                        <Grid className="align-c pt-25 txt-18 txt-line-26 txt-700 col-title">
                            Nodarbošanās
                        </Grid>
                    </Grid>

                    {/* stick 4 */}
                    <Grid>
                        <Grid className="justify-center">
                            {
                                data4 && data4.map((item, key) => {
                                    let height = 140;
                                    let opacity = 1;
                                    let radio = item / Math.max(...data4);
                                    if (radio !== 1) {
                                        height = height * radio;
                                        opacity = Math.ceil(opacity * radio * 9) / 10;
                                    }
                                    return (
                                        <div className="bottom-p txt-12 txt-line-15 txt-600" key={"stick-3-" + key}>
                                            <div className="pb-8 col-gray-1 align-c">
                                                {item}%
                                            </div>
                                            <div className="stick-box" style={{height: height, opacity: opacity}} />
                                            <div className="pt-8 col-gray-2 align-c">
                                                {commit4[key]}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                        <div className="align-c pt-20 txt-18 txt-line-26 txt-700 col-title">
                            Dzimums
                        </div>
                    </Grid>

                    {/* stick 5 */}
                    <Grid>
                        <Grid className="justify-center">
                            {
                                data5 && data5.map((item, key) => {
                                    let height = 140;
                                    let opacity = 1;
                                    let radio = item / Math.max(...data5);
                                    if (radio !== 1) {
                                        height = height * radio;
                                        opacity = Math.ceil(opacity * radio * 11) / 10;
                                    }
                                    return (
                                        <div className="bottom-p txt-12 txt-line-15 txt-600" key={"stick-3-" + key}>
                                            <div className="pb-8 col-gray-1 align-c">
                                                {item}%
                                            </div>
                                            <div className="stick-box" style={{height: height, opacity: opacity}} />
                                            <div className="pt-8 col-gray-2 align-c">
                                                {commit5[key]}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                        <div className="align-c pt-20 txt-18 txt-line-26 txt-700 col-title">
                            Tautība
                        </div>
                    </Grid>
                </Grid>
            </section>

            <section className="reklama-bg">
                <Grid className="rectangle-bg">
                    <Grid className="rectangle-p txt-700 txt-line-50 col-black">
                        <div className="txt-24 txt-line-30 txt-800 col-title">
                            Reklāmas pozīcijas  🎉
                        </div>
                        <div className="dot-hr" />
                        <div className="justify-left">
                            <div>
                                <img className="check-icon" src={require("../assets/img/check.png")} alt="check icon" />
                            </div>
                            <div>
                                Ekrāni pasta nodaļās
                            </div>
                        </div>
                        <div className="justify-left">
                            <div>
                                <img className="check-icon" src={require("../assets/img/check.png")} alt="check icon" />
                            </div>
                            <div>
                                Kasu sistēmu ekrāni
                            </div>
                        </div>
                        <div className="justify-left">
                            <div>
                                <img className="check-icon" src={require("../assets/img/check.png")} alt="check icon" />
                            </div>
                            <div>
                                A2 Plakāti
                            </div>
                        </div>
                        <div className="justify-left">
                            <div>
                                <img className="check-icon" src={require("../assets/img/check.png")} alt="check icon" />
                            </div>
                            <div>
                                Bukleti / leafleti
                            </div>
                        </div>
                        <div className="justify-left">
                            <div>
                                <img className="check-icon" src={require("../assets/img/check.png")} alt="check icon" />
                            </div>
                            <div>
                                Mazie stendi
                            </div>
                        </div>
                        <div className="justify-left">
                            <div>
                                <img className="check-icon" src={require("../assets/img/check.png")} alt="check icon" />
                            </div>
                            <div>
                                Svārstekļu izvietojums kases zonā
                            </div>
                        </div>
                        <div className="justify-left">
                            <div>
                                <img className="check-icon" src={require("../assets/img/check.png")} alt="check icon" />
                            </div>
                            <div>
                                Neadresētā reklāma
                            </div>
                        </div>
                        <div className="justify-left">
                            <div>
                                <img className="check-icon" src={require("../assets/img/check.png")} alt="check icon" />
                            </div>
                            <div>
                                Nestandarta reklāmas sniegšana
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </section>

            <section className="home-body align-c">
                <div className="pt-140 pasta-t txt-32 txt-800 col-title txt-line-42">
                    Pasta nodaļu sadalījums pa grupām
                </div>
                <div className="pt-24 txt-16 txt-400 txt-line-24 col-grey-black txt-pec-width">
                    Pēc apmeklējumu skaita un atrašanās vietas pasta nodaļas ir iedalītas četrās grupās. Reklāmas materiālu izvietošanas cena ir atkarīga no tā, kuru no pasta grupām jūs izvēlēsieties.
                </div>
                <Grid className="pt-48 pasta-t">
                    {/* Desktop version*/}
                    <TableContainer className="table-border">
                        <Table aria-label="simple table">
                            <TableHead  className="txt-16 txt-line-24 txt-800 col-icon-bg">
                                <TableRow>
                                    <TableCell>Grupa</TableCell>
                                    <TableCell align="center">Reģions</TableCell>
                                    <TableCell align="center">Pasta nodaļas</TableCell>
                                    <TableCell align="center">Apmeklējums/Nedēļā</TableCell>
                                    <TableCell align="center">Apmeklējums/Gadā</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="txt-18 txt-700 txt-line-22 col-main-black">
                                {rows.map((row) => (
                                    <TableRow key={row.grupa}>
                                        <TableCell component="th" scope="row">
                                            {row.grupa}
                                        </TableCell>
                                        <TableCell align="center">{row.reģions}</TableCell>
                                        <TableCell align="center">{row.pasta}</TableCell>
                                        <TableCell align="center">{row.nedēļā}</TableCell>
                                        <TableCell align="center">{row.gadā}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* mobile version*/}
                    {rows.map((row) => (
                        <div className="pt-8">
                            <TableContainer className="table-border mobile">
                                <Table aria-label="simple table">
                                    <TableBody className="txt-16 txt-line-24 txt-800 col-icon-bg">
                                        <TableRow>
                                            <TableCell>Grupa</TableCell>
                                            <TableCell align="right">{row.grupa}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Reģions</TableCell>
                                            <TableCell align="right">{row.reģions}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Pasta nodaļas</TableCell>
                                            <TableCell align="right">{row.pasta}</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>Apmeklējums/Nedēļā</TableCell>
                                            <TableCell align="right">{row.nedēļā}</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>Apmeklējums/Gadā</TableCell>
                                            <TableCell align="right">{row.gadā}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    ))}
                </Grid>
                <Grid className="pt-16">
                    <Button
                        className="txt-16 txt-line-27 txt-800 btn-bg-color"
                        onClick={onClick}
                    >
                        Aprēķini kampaņas cenu tagad
                    </Button>
                </Grid>

                <Grid className="pt-135 txt-32 txt-800 txt-line-42 col-title txt-upper">
                    Tarifi
                </Grid>
                <Grid className="pt-24 txt-16 txt-400 txt-line-24 col-grey-black">
                    Tarifs par 1 kalendāro nedēļu 1 pasta pakalpojumu sniegšanas vietā (Eur)*
                </Grid>

                <Grid className="pt-48 seven-blocks flex-grid3">
                    {
                        product && product.map((item, key) => {
                            return (
                                <div key={"product-" + key} className="location-check">
                                    <div className="justify-left dot-border">
                                        <img className="group-icon" src={require("../assets/img/vector-" + (key + 1).toString() + ".png")} alt="icon block 1" />
                                        <div className="txt-20 txt-700 txt-line-24 col-title">{item.title}</div>
                                    </div>
                                    {item.contents && item.contents.map((content, index) => {
                                        return (
                                            <div className="txt-600 txt-line-24 col-main-black" key={'product-content-' + index}>
                                                {
                                                    !content.amount ?
                                                        <div className="justify-left pt-24">
                                                            <img className="location-check-icon" src={require("../assets/img/check.png")} alt="icon block 1" />
                                                            <div>{content.item}</div>
                                                        </div>
                                                        :
                                                        <div className="flex-location pt-20 ">
                                                            <div className="justify-location">
                                                                <img className="location-icon" src={require("../assets/img/vector.png")} alt="icon block 1" />
                                                                <div className="desktop-show">
                                                                    {content.item}
                                                                </div>
                                                                <div className="mobile-show">
                                                                    {content.item.length > 10 ? 'All' : content.item}
                                                                </div>
                                                            </div>
                                                            <div className="txt-800 txt-min-w align-r">€ {content.amount}</div>
                                                        </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })
                    }
                </Grid>

                <Grid className="pt-140">
                    <div className="txt-32 txt-800 txt-line-42 col-title">
                        Reklāms izvietošanas nosacījumi
                    </div>

                    <Grid container className="contents-center pt-64" spacing={6}>
                        <Grid item className="plus-left-btns">
                            <div className="txt-body">
                                {
                                    reklams_list && reklams_list.map((item, i) => {
                                        return (
                                            <Grid className="plus-grid" key={'reklams' + i} xs={12}>
                                                <Button className="btn-plus">
                                                    <img className="plus-icon" src={require("../assets/img/icon-plus.png")} alt = "plus icon" />
                                                    <span className="font-lato txt-18 txt-700 txt-line-22 col-main-black txt-unset">
                                                        {item}
                                                    </span>
                                                </Button>
                                            </Grid>
                                        )
                                    })
                                }
                            </div>
                        </Grid>
                        <Grid item className="first-bg plus-right-bg">
                            <div className="txt-body">
                                <div className="right-bg-2 bg-set">
                                    <div className="img-bottom-right-dot">
                                        <img src={require("../assets/img/header-bg-left.png")} className="bottom-img" alt="bottom bg" />
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className="pt-204">
                    <div className="txt-32 txt-800 txt-line-42 col-title">
                        Aprēķinu plānotajai reklāmas kampaņai
                    </div>
                    <Grid className="pt-64">

                        {/* Desktop version */}
                        <Grid className="desktop-show">
                            <div className="flex-img">
                                <div className="pr-16 img-title-position">
                                    <img src={require("../assets/img/product-1.png")} className="product-1" alt="product 1" />
                                    <div className="img-title txt-24 txt-900 txt-line-20 col-white">
                                        Ekrāni pasta nodaļās
                                    </div>
                                </div>
                                <div className="img-title-position">
                                    <img src={require("../assets/img/product-2.png")} className="product-1" alt="product 2" />
                                    <div className="img-title txt-24 txt-900 txt-line-20 col-white">
                                        A2 plakāti
                                    </div>
                                </div>
                            </div>
                            <div className="flex-img">
                                <div className="pt-img-16 pr-16">
                                    <div className="img-title-position">
                                        <img src={require("../assets/img/product-3.png")} className="product-1" alt="product 3" />
                                        <div className="img-title txt-24 txt-900 txt-line-20 col-white">
                                            Mazais stends
                                        </div>
                                    </div>
                                    <div className="pt-img-16 img-title-position">
                                        <img src={require("../assets/img/product-4.png")} className="product-1" alt="product 4" />
                                        <div className="img-title txt-24 txt-900 txt-line-30 col-white">
                                            Bukleti / leafleti (svars līdz 50 gr.)
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-center-16 pr-16 img-title-position">
                                    <img src={require("../assets/img/product-5.png")} className="product-1" alt="product 5" />
                                    <div className="img-title txt-24 txt-900 txt-line-20 col-white">
                                        Kases sistēmu ekrāni
                                    </div>
                                </div>
                                <div className="pt-img-16">
                                    <div className="img-title-position">
                                        <img src={require("../assets/img/product-6.png")} className="product-1" alt="product 6" />
                                        <div className="img-title txt-24 txt-900 txt-line-30 col-white">
                                            Bukleti / leaflet
                                            (svars 51 gr. un vairāk)
                                        </div>
                                    </div>
                                    <div className="pt-img-16 img-title-position">
                                        <img src={require("../assets/img/product-7.png")} className="product-1" alt="product 7" />
                                        <div className="img-title txt-24 txt-900 txt-line-30 col-white">
                                            Svārstekļa izvietojums
                                            kases zonā
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>

                        {/* Mobile Version */}
                        <Grid className="mobile-show">
                            <div className="flex-img">
                                <div className="pr-16 img-title-position">
                                    <img src={require("../assets/img/product-mobile-1.png")} className="product-1" alt="product 1" />
                                    <div className="img-title txt-24 txt-900 txt-line-20 col-white">
                                        Ekrāni pasta nodaļās
                                    </div>
                                </div>
                                <div className="img-title-position">
                                    <img src={require("../assets/img/product-mobile-3.png")} className="product-1" alt="product 3" />
                                    <div className="img-title txt-24 txt-900 txt-line-20 col-white">
                                        Mazais stends
                                    </div>
                                </div>
                            </div>

                            <div className="flex-img">
                                <div className="img-title-position">
                                    <img src={require("../assets/img/product-mobile-2.png")} className="product-1" alt="product 2" />
                                    <div className="img-title txt-24 txt-900 txt-line-20 col-white">
                                        A2 plakāti
                                    </div>
                                </div>
                            </div>

                            <div className="flex-img">
                                <div className="pr-16 pt-img-16 img-title-position">
                                    <img src={require("../assets/img/product-mobile-7.png")} className="product-1" alt="product 7" />
                                    <div className="img-title txt-24 txt-900 txt-line-30 col-white">
                                        Svārstekļa izvietojums
                                        kases zonā
                                    </div>
                                </div>
                                <div className="img-title-position">
                                    <img src={require("../assets/img/product-mobile-6.png")} className="product-1" alt="product 6" />
                                    <div className="img-title txt-24 txt-900 txt-line-30 col-white">
                                        Bukleti / leaflet
                                        (svars 51 gr. un vairāk)
                                    </div>
                                </div>
                            </div>
                            <div className="flex-img">
                                <div className="pr-16 pt-img-16 img-title-position">
                                    <img src={require("../assets/img/product-mobile-4.png")} className="product-1" alt="product 4" />
                                    <div className="img-title txt-24 txt-900 txt-line-30 col-white">
                                        Bukleti / leafleti (svars līdz 50 gr.)
                                    </div>
                                </div>
                                <div className="pt-center-16 img-title-position">
                                    <img src={require("../assets/img/product-mobile-5.png")} className="product-1" alt="product 5" />
                                    <div className="img-title txt-24 txt-900 txt-line-20 col-white">
                                        Kases sistēmu ekrāni
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid className="pt-48">
                        <Button
                            className="txt-16 txt-line-27 txt-800 btn-bg-color"
                            onClick={onClick}
                        >
                            Aprēķini kampaņas cenu tagad
                        </Button>
                    </Grid>
                </Grid>
            </section>
        </>
    )
}
