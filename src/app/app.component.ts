import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit() {

    var chartData = {
      "id": 1,
      "name": "Aero",
      "children": [
        {
          "id": 1,
          "name": "Manufactur",
          "children": [
            {
              "id": 2,
              "name": "Print xyz pqr loading",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 6,
              "name": "Bio xyz pqr",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 3,
              "name": "Ultra xyz pqr hello testing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 8,
              "name": "Assemble xyz pqr",
              "maturation": "2040",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 7,
              "name": "Reactor xyz pqr",
              "maturation": "2036",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 1,
              "name": "Holo xyz pqr test",
              "maturation": "2036",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 5,
              "name": "Test xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 10,
              "name": "Rapid xyz pqr resume ed",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 9,
              "name": "Nano xyz pqr leading testing",
              "maturation": "2045",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 4,
              "name": "Liquid xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        },
        {
          "id": 2,
          "name": "Tech",
          "children": [
            {
              "id": 16,
              "name": "Genics xyz pqr test resume",
              "maturation": "2021",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 24,
              "name": "Person xyz pqr hello",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 31,
              "name": "Stem xyz pqr",
              "maturation": "2024",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 11,
              "name": "Drugs xyz pqr loading",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 12,
              "name": "Aging xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 23,
              "name": "NMed xyz pqr hi",
              "maturation": "2025",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 32,
              "name": "Tissue xyz pqr welcome",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 22,
              "name": "Biome xyz pqr",
              "maturation": "2030",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 29,
              "name": "Smart xyz pqr hello",
              "maturation": "2032",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 13,
              "name": "Teleport xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 20,
              "name": "Chips xyz pqr service",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 18,
              "name": "Gene xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 17,
              "name": "Edit xyz pqr testing lead",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 26,
              "name": "Synt xyz pqr load blance",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 21,
              "name": "Tri xyz pqr",
              "maturation": "2032",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 27,
              "name": "Smartd xyz pqr test balance",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 19,
              "name": "Hi MRI xyz pqr",
              "maturation": "2029",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 33,
              "name": "Nanotrans xyz pqr new pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 30,
              "name": "Syntnes xyz pqr leading",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 14,
              "name": "Biolants xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 25,
              "name": "Regene xyz pqr hello",
              "maturation": "2046",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 15,
              "name": "Chiras xyz pqr",
              "maturation": "2031",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 28,
              "name": "Netics xyz pqr hello zam",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 2
            }
          ]
        },
        {
          "id": 3,
          "name": "Digconn",
          "children": [
            {
              "id": 37,
              "name": "Li xyz pqr testing new load",
              "maturation": "2029",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 41,
              "name": "Nilcom xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 169,
              "name": "2D xyz pqr testing",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 45,
              "name": "Gig xyz pqr loading",
              "maturation": "2027",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 38,
              "name": "Cular xyz pqr hello",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 44,
              "name": "Tera xyz pqr",
              "maturation": "2038",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 40,
              "name": "Satel xyz pqr manufacture",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 42,
              "name": "WiFi xyz pqr",
              "maturation": "2029",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 43,
              "name": "Quant xyz pqr new manufacture",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 36,
              "name": "planet xyz pqr market",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 39,
              "name": "Multe xyz pqr",
              "maturation": "2030",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 35,
              "name": "Altitude xyz pqr shoppling",
              "maturation": "2038",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 34,
              "name": "Cognit xyz pqr development",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        },
        {
          "id": 4,
          "name": "Energy",
          "children": [
            {
              "id": 54,
              "name": "Grap xyz pqr devops",
              "maturation": "2038",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 55,
              "name": "Scale xyz pqr",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 51,
              "name": "Electron xyz pqr nothing",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 65,
              "name": "Thor xyz pqr",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 60,
              "name": "Photovol xyz pqr elsiver",
              "maturation": "2029",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 46,
              "name": "Artsynthesis xyz pqr down",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 53,
              "name": "Fus xyz pqr up",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 66,
              "name": "TravelReac xyz pqr",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 61,
              "name": "PlasDriv xyz pqr hello world",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 48,
              "name": "Biofuel xyz pqr test test1",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 62,
              "name": "QuaEng xyz pqr country",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 59,
              "name": "NanoBat xyz pqr",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 50,
              "name": "Electro xyz pqr info",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 64,
              "name": "Film xyz pqr technology",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 58,
              "name": "Nanrators xyz pqr",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 49,
              "name": "mechanical xyz pqr test",
              "maturation": "2029",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 52,
              "name": "Cells xyz pqr computer",
              "maturation": "2031",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 47,
              "name": "Energy xyz pqr",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 63,
              "name": "Electric xyz pqr electronics",
              "maturation": "2031",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 57,
              "name": "Molectems xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 67,
              "name": "Wireenergy xyz pqr mech",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 56,
              "name": "Li xyz pqr random",
              "maturation": "2030",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        },
        {
          "id": 5,
          "name": "Geo",
          "children": [
            {
              "id": 72,
              "name": "Terr xyz pqr new tech",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 71,
              "name": "Desa xyz pqr",
              "maturation": "2036",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 70,
              "name": "Cliering xyz pqr new way",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 68,
              "name": "Arch xyz pqr",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 69,
              "name": "Cartration xyz pqr hight",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            }
          ]
        },
        {
          "id": 6,
          "name": "Mach Systems",
          "children": [
            {
              "id": 77,
              "name": "Checomput xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 79,
              "name": "Naitive xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 75,
              "name": "Artigence xyz pqr low",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 90,
              "name": "Tonic C xyz pqr test",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 91,
              "name": "Tum Compute xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 82,
              "name": "Decent Comput xyz pqr testing",
              "maturation": "2036",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 78,
              "name": "Less Comput xyz pqr nice",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 93,
              "name": "Smadust xyz pqr",
              "maturation": "2038",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 74,
              "name": "Affcomp xyz pqr implementation",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 73,
              "name": "Lays xyz pqr understanding",
              "maturation": "2032",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 95,
              "name": "Minerchain xyz pqr run",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 85,
              "name": "Next xyz pqr fast",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 92,
              "name": "Figurables xyz pqr",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 94,
              "name": "Sligence xyz pqr fact",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 88,
              "name": "Moting xyz pqr load test",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 84,
              "name": "Foging xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 83,
              "name": "LMA Computing  xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 76,
              "name": "Block xyz pqr load balance",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 87,
              "name": "Motes xyz pqr",
              "maturation": "2028",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 80,
              "name": "Container xyz pqr tech",
              "maturation": "2029",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 89,
              "name": "Neuro xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 81,
              "name": "Creat xyz pqr new testing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 86,
              "name": "Vision xyz pqr technology",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        },
        {
          "id": 7,
          "name": "Mat",
          "children": [
            {
              "id": 112,
              "name": "Room xyz pqr learning",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 110,
              "name": "Tum Materials xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 103,
              "name": "Meta Materials Technology",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 113,
              "name": "Healing Materials",
              "maturation": "2038",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 106,
              "name": "Nc Materials xyz pqr computer",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 102,
              "name": "Megnets xyz pqr",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 104,
              "name": "Naials xyz pqr science",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 100,
              "name": "Limour  xyz pqr hi",
              "maturation": "2027",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 114,
              "name": "Smials xyz pqr learn",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 97,
              "name": "Bials xyz pqr knowledge",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 101,
              "name": "Lials xyz pqr run",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 105,
              "name": "Namics xyz pqr learn",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 109,
              "name": "Progtter xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 96,
              "name": "Atom xyz pqr learning",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 115,
              "name": "Spray xyz pqr",
              "maturation": "2036",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 108,
              "name": "Polys xyz pqr new way",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 111,
              "name": "Tive Mat  xyz pqr",
              "maturation": "2036",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 98,
              "name": "Flex Elect xyz pqr hello world",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 107,
              "name": "Tubes xyz pqr",
              "maturation": "2027",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 99,
              "name": "Graph xyz pqr new tech",
              "maturation": "2029",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 116,
              "name": "Vasculposites ram xyz pqr",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        },
        {
          "id": 8,
          "name": "Robo",
          "children": [
            {
              "id": 122,
              "name": "Molecular xyz pqr",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 126,
              "name": "Swar hello test",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 119,
              "name": "Cobots xyz pqr testing",
              "maturation": "2031",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 125,
              "name": "Sof New looking",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 120,
              "name": "Dro load balancing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 121,
              "name": "Suits new group",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 127,
              "name": "Fog xyz new testing pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 117,
              "name": "Biobrid xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 124,
              "name": "Rotics industries xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 118,
              "name": "Bgts xyz pqr technology",
              "maturation": "2032",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 123,
              "name": "Namo orientsation xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        },
        {
          "id": 9,
          "name": "Secure",
          "children": [
            {
              "id": 132,
              "name": "roof Code xyz pqr",
              "maturation": "2032",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 129,
              "name": "Based Secu xyz pqr",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 135,
              "name": "Morform technology xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 131,
              "name": "Eryption xyz testing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 133,
              "name": "Assurance xyz techtest",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 130,
              "name": "Bics xyz load test",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 134,
              "name": "Identcryption hello world pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 136,
              "name": "Onegrams xyz new gen pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 138,
              "name": "Quantgraphy xyz pqr generation",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 137,
              "name": "Postography xyz pqr computer",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 128,
              "name": "Artitems xyz pqr sceince",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 139,
              "name": "Sel System xyz hello pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        },
        {
          "id": 10,
          "name": "Senrs",
          "children": [
            {
              "id": 143,
              "name": "Fraphy xyz pqr last",
              "maturation": "2027",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 140,
              "name": "Backs xyz technology pqr",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 147,
              "name": "Micro biology xyz pqr",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 142,
              "name": "Bisors xyz pqr test",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 151,
              "name": "Quantors xyz pqr learning",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 149,
              "name": "Multinsors xyz tech pqr",
              "maturation": "2032",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 146,
              "name": "Hypersors xyz pqr hello world",
              "maturation": "2032",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 145,
              "name": "Graph xyz pqr testing",
              "maturation": "2036",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 141,
              "name": "Biome xyz run pqr",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 144,
              "name": "Elects xyz pqr",
              "maturation": "2031",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 150,
              "name": "Naors xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 148,
              "name": "Mosors xyz pqr",
              "maturation": "2026",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        },
        {
          "id": 11,
          "name": "Use face",
          "children": [
            {
              "id": 167,
              "name": "Ultring xyz pqr",
              "maturation": "2028",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 158,
              "name": "Hapa xyz pqr",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 164,
              "name": "Pers stants xyz pqr",
              "maturation": "2036",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 165,
              "name": "Screens xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 160,
              "name": "Naked xyz pqr",
              "maturation": "2030",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 155,
              "name": "Avars xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 152,
              "name": "Lsplays xyz pqr",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 168,
              "name": "Virlity xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 166,
              "name": "Toch xyz pqr",
              "maturation": "2029",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 162,
              "name": "Nalation xyz pqr",
              "maturation": "2031",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 163,
              "name": "Nefaces xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 159,
              "name": "Holo xyz pqr",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 153,
              "name": "Degree xyz pqr",
              "maturation": "2028",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 154,
              "name": "Reality xyz pqr",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 156,
              "name": "Microphones xyz pqr",
              "maturation": "2028",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 157,
              "name": "Ge Control xyz pqr",
              "maturation": "2024",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 161,
              "name": "Natage xyz pqr",
              "maturation": "2027",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        }
      ]
    };

    var colors = {
      "Manufactur": "#d30000",
      "Tech": "#ed5b00",
      "Digconn": "#ff8a00",
      "Energy": "#a5be00",
      "Geo": "#007600",
      "Mach Systems": "#00a9e8",
      "Mat": "#006395",
      "Robo": "#8d6fff",
      "Secure": "#77005c",
      "Senrs": "#c56290",
      "Use face": "#a9004f"
    };
    // Dimensions of starburst.
    var width = 800;
    var height = 800;
    var radius = Math.min(width, height) / 4;
    var startYear = 2020;
    var endYear = 2040;
    var baseYear = startYear - 1;
    var yearRing = [{ x: 199, y: 199 }, { x: 162, y: 162 }, { x: 128, y: 128 }, { x: 94, y: 94 }, { x: 60, y: 60 }];
    var maturationYearTextData = [{ dx: -14, dy: -92, label: "2025" }, { dx: -14, dy: -126, label: "2030" }, { dx: -14, dy: -160, label: "2035" }, { dx: -14, dy: -197, label: "2040" }];


    var vis = d3.select("#chart").append("svg:svg")
      .attr("width", width)
      .attr("height", height)
      .append("svg:g")
      .attr("id", "container")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var partition = d3.layout.partition()
      .size([2 * Math.PI, radius * radius])
      .value(function (d) { return 1; });

    var arc = d3.svg.arc()
      .startAngle(function (d) { return d.x; })
      .endAngle(function (d) { return d.x + d.dx; })
      .innerRadius(function (d) {
        if (d.depth == 1) {
          return 60;
        } else {
          return Math.sqrt(d.y) + 50;
        }
      })
      .outerRadius(function (d) {
        if (d.depth == 2) {
          return Math.sqrt(d.y + d.dy);
        } else {
          return Math.sqrt(d.y + d.dy) + 50;
        }
      });

    //start rendering   
    generateStarBurst(chartData);

    // Main function to draw graph and set up the visualization, once we have the data.
    function generateStarBurst(json) {

      // Bounding circle underneath the starburst, to make it easier to detect
      // when the mouse leaves the parent g.

      // For efficiency, filter nodes to keep only those large enough to see.
      var nodes = partition.nodes(json)
        .filter(function (d) {
          return (d.dx > 0.005); // 0.005 radians = 0.29 degrees
        });

      var technologies = (function (a) {
        var output = [];
        a.forEach(function (d) {
          if (output.indexOf(d.name) === -1) {
            if (d.depth == 2) {
              output.push(d);
            }
          }
        });
        return output;
      })(nodes);

      var circle = vis.selectAll("circle")
        .data(yearRing)
        .enter().append("svg:circle")
        .attr("r", function (d) { return d.x; })
        .style("fill", function (d, i) { return (i == yearRing.length - 1) ? "#fff" : "#f0f0f0"; })
        .style('stroke', '#fff')
        .style("stroke-width", 1.5);

      var path = vis.selectAll("path")
        .data(nodes)
        .enter().append("svg:path")
        .attr("display", function (d) { return d.depth ? null : "none"; })
        .attr("d", arc)
        .attr("fill-rule", "evenodd")
        .attr("id", function (d) { return d.name })
        .style("fill", function (d) { return (d.depth == 2) ? colors[d.parent.name] : "transparent"; })
        .style("opacity", 1)
        .style('stroke', function (d) { return (d.depth == 2) ? colors[d.parent.name] : "#fff"; })
        .style("stroke-width", 1.5);

      var maturationYear = vis.selectAll("ellipse")
        .data([{ cx: 0, cy: -92 }, { cx: 0, cy: -126 }, { cx: 0, cy: -160 }, { cx: 0, cy: -197 }])
        .enter().append("svg:ellipse")
        .attr("cx", function (d) { return d.cx; })
        .attr("cy", function (d) { return d.cy; })
        .attr("rx", 24)
        .attr("ry", 13)
        .style("fill", "#fff");


      var technologyText = vis.selectAll("technologyText")
        .data(nodes)
        .enter().append("text")
        .attr("id", function (d) { return "technologyText" + d.name; })
        .attr("transform", function (d) { return "rotate(" + computeTextRotation(d) + ")"; })
        .attr("x", "6")
        .style("font-size", function (d) { return (d.depth == 2) ? "9px" : "10px"; })
        .style("font-weight", "bold")
        .style("fill", function (d) { return (d.depth == 2) ? colors[d.parent.name] : ""; })
        .attr("dx", function (d) { return (d.depth == 1) ? 75 : 230; }) // margin
        .attr("dy", ".35em") // vertical-align
        .text(function (d) { return d.depth == 2 ? "-" + d.name.toUpperCase() : ""; })
        .on("mouseover", mouseover)
        .on("mouseleave", mouseleave);

      var categoryText = vis.selectAll("categoryText")
        .data(nodes)
        .enter().append("text")
        .style("fill", "#fff")
        .style("font-size", "12px")
        .attr("dy", function (d) { return "11" }) //Move the text down
        .append("textPath")
        .attr("xlink:href", function (d, i) { return "#" + d.name; })
        .attr("startOffset", function (d) {
          return "05%";
        })
        .text(function (d) {
          var name;
          if (d.depth == 1) {
            name = d.name;
          } else {
            name = "";
          }
          return name.toUpperCase();
        });


      var techCircle = vis.selectAll("techCircle")
        .data(technologies)
        .enter().append("svg:circle")
        .attr("id", function (d) { return "techcircle" + d.name; })
        .attr("cx", function (d) { return getTechCircleData(d, 0); })
        .attr("cy", function (d) { return getTechCircleData(d, 1); })
        .attr("r", 3.5)
        .style("fill", function (d) {
          return d.depth < 1 ? "#C0C0C0" : colors[d.parent.name];
        });

      var techCircleText = vis.selectAll("techCircleText")
        .data(technologies)
        .enter().append("svg:text")
        .attr("id", function (d) { return "techCircleText" + d.name; })
        .text(function (d) { return getTechnologyIndex(d); })
        .style("font-size", "6px")
        .attr("y", "2")
        .style("fill", "#fff")
        .attr("text-anchor", "middle")
        .attr("dx", function (d) { return getTechCircleData(d, 0); })
        .attr("dy", function (d) { return getTechCircleData(d, 1); })


      var techInvisiblecircle = vis.selectAll("techInvisibleCircle")
        .data(technologies)
        .enter().append("svg:circle")
        .attr("id", function (d) { return "techInvisibleCircle" + d.name; })
        .attr("cx", function (d) { return getTechCircleData(d, 0); })
        .attr("cy", function (d) { return getTechCircleData(d, 1); })
        .attr("r", 3.5)
        .style("fill", "transparent")
        .style("strok", "#fff")
        .on("mouseover", mouseover)
        .on("mouseleave", mouseleave);


      var maturationYearText = vis.selectAll("maturationYearText")
        .data(maturationYearTextData)
        .enter().append("text")
        .text(function (d) { return d.label; })
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .attr("x", "2")
        .attr("y", "3")
        .attr("dx", function (d) { return d.dx; })
        .attr("dy", function (d) { return d.dy; });
    };



    // Fade all but the current sequence.
    function mouseover(d) {
      d3.select(this).style("cursor", "pointer");
      d3.select("#technology")
        .text(d.name.toUpperCase());
      d3.select("#maturationText")
        .text(d.maturation);
      d3.select("#associationText")
        .text(d.association);
      d3.select("#explanation")
        .style("visibility", "");
    }


    // Restore everything to full opacity when moving off the visualization.
    function mouseleave(d) {
      d3.select(this).style("cursor", "default");
      // Deactivate all segments during transition.
      d3.selectAll('[id^="techInvisibleCircle"]').on("mouseover", null);
      d3.selectAll('[id^="technologyText"]').on("mouseover", null);
      // Transition each segment to full opacity and then reactivate it.
      d3.selectAll('[id^="techInvisibleCircle"]').transition()
        .duration(10)
        .each("end", function () {
          d3.select(this).on("mouseover", mouseover);
        });
      // Transition each segment to full opacity and then reactivate it.
      d3.selectAll('[id^="technologyText"]').transition()
        .duration(10)
        .each("end", function () {
          d3.select(this).on("mouseover", mouseover);
        });
      d3.select("#explanation")
        .style("visibility", "hidden");
    }
    //calculate rotation angle of text
    function computeTextRotation(d) {
      return (d.x + (d.dx) / 2) * 180 / Math.PI - 90;
    }

    //calculate the position of bubble
    function getTechCircleData(d, i) {
      if (d.maturation <= startYear) {
        return arc.centroid(d)[i] * (0.25 + 0.0332 * 1);
      }
      else if (d.maturation > endYear) {
        return arc.centroid(d)[i] * 1.080;
      }
      else {
        return arc.centroid(d)[i] * (0.25 + 0.0332 * (d.maturation - baseYear));
      }
    }

    function getTechnologyIndex(d) {
      if (d.depth == 2) {
        return d.parent.children.map(function (e) { return e.name; }).indexOf(d.name) + 1;
      }
    }

  }
}
