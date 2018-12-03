import { Component, OnInit} from '@angular/core';
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
      "name": "Aerospace and Defence",
      "children": [
        {
          "id": 1,
          "name": "Advanced Manufacturing",
          "children": [
            {
              "id": 2,
              "name": "3D Printing",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 6,
              "name": "Bio-Printing",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 3,
              "name": "3D Ultrasonic Printing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 8,
              "name": "Molecular Assemblers",
              "maturation": "2040",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 7,
              "name": "Bio-Reactors",
              "maturation": "2036",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 1,
              "name": "3D Holographic Printing",
              "maturation": "2036",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 5,
              "name": "Bio-Manufacturing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 10,
              "name": "Rapid Liquid Printing",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 9,
              "name": "Nano-Manufacturing",
              "maturation": "2045",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 4,
              "name": "4D Printing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        },
        {
          "id": 2,
          "name": "Biotech",
          "children": [
            {
              "id": 16,
              "name": "Cryogenics",
              "maturation": "2021",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 24,
              "name": "Personalised Medicine",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 31,
              "name": "Synthetic Stem Cells",
              "maturation": "2024",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 11,
              "name": "Anti Ageing Drugs",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 12,
              "name": "Bioelectronic Medicine",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 23,
              "name": "Nano Medicine",
              "maturation": "2025",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 32,
              "name": "Tissue Engineering",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 22,
              "name": "Microbiome Medicine",
              "maturation": "2030",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 29,
              "name": "Smart Pills",
              "maturation": "2032",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 13,
              "name": "Biological Teleporter",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 20,
              "name": "Labs on Chips",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 18,
              "name": "Gene Therapy",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 17,
              "name": "Gene Editing",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 26,
              "name": "Semi-Synthetic Organisms",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 21,
              "name": "Medical Tricorder",
              "maturation": "2032",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 27,
              "name": "Smart Drugs",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 19,
              "name": "Hi Resolution fMRI",
              "maturation": "2029",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 33,
              "name": "Tissue Nanotransfection",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 30,
              "name": "Synthetic Genes",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 14,
              "name": "Bionic Implants",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 25,
              "name": "Regenerative Medicine",
              "maturation": "2046",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 15,
              "name": "Chimeras",
              "maturation": "2031",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 28,
              "name": "Smart Neuroprosthetics",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 2
            }
          ]
        },
        {
          "id": 3,
          "name": "Digital Connectivity",
          "children": [
            {
              "id": 37,
              "name": "LiFi",
              "maturation": "2029",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 41,
              "name": "Nil Communication",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 169,
              "name": "6G",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 45,
              "name": "WiGig",
              "maturation": "2027",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 38,
              "name": "Molecular Communications",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 44,
              "name": "Terabit Networks",
              "maturation": "2038",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 40,
              "name": "Nano Satellites",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 42,
              "name": "No Power WiFi",
              "maturation": "2029",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 43,
              "name": "Quantum Internet",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 36,
              "name": "Interplanetary Internet",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 39,
              "name": "MulteFire",
              "maturation": "2030",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 35,
              "name": "High Altitude Platforms",
              "maturation": "2038",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 34,
              "name": "Cognitive Radio",
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
              "name": "Graphene Energy Systems",
              "maturation": "2038",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 55,
              "name": "Grid Scale Energy Storage",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 51,
              "name": "Electronic Blood",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 65,
              "name": "Thorium Reactors",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 60,
              "name": "Photovoltaics",
              "maturation": "2029",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 46,
              "name": "Artificial Photosynthesis",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 53,
              "name": "Fusion",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 66,
              "name": "Travelling Wave Reactors",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 61,
              "name": "Plasma Drives",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 48,
              "name": "Biofuels",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 62,
              "name": "Quark Energy",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 59,
              "name": "Nanowire Batteries",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 50,
              "name": "Electromagnetic Drives",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 64,
              "name": "Thin Film Batteries",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 58,
              "name": "Nano Generators",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 49,
              "name": "Biomechanical Harvesting",
              "maturation": "2029",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 52,
              "name": "Fuel Cells",
              "maturation": "2031",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 47,
              "name": "Backscatter Energy Systems",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 63,
              "name": "Thermoelectric Drives",
              "maturation": "2031",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 57,
              "name": "Molecular Energy Systems",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 67,
              "name": "Wireless Energy",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 56,
              "name": "Lithium Air Batteries",
              "maturation": "2030",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        },
        {
          "id": 5,
          "name": "Geoengineering",
          "children": [
            {
              "id": 72,
              "name": "Terraforming",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 71,
              "name": "Desalination Systems",
              "maturation": "2036",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 70,
              "name": "Climate Engineering",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 68,
              "name": "Archologies",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            },
            {
              "id": 69,
              "name": "Carbon Sequestration",
              "maturation": "2050",
              "association": "NONE",
              "impact": 0
            }
          ]
        },
        {
          "id": 6,
          "name": "Machine Systems",
          "children": [
            {
              "id": 77,
              "name": "Chemical Computing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 79,
              "name": "Cognitive Computing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 75,
              "name": "Artificial Intelligence",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 90,
              "name": "Photonic Computing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 91,
              "name": "Quantum Computing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 82,
              "name": "Decentralised Computing",
              "maturation": "2036",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 78,
              "name": "Codeless Computing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 93,
              "name": "Smart Dust",
              "maturation": "2038",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 74,
              "name": "Affective Computing",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 73,
              "name": "3D Chips",
              "maturation": "2032",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 95,
              "name": "Minerless Blockchain",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 85,
              "name": "Liquid Computing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 92,
              "name": "Reconfigurable Electronics",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 94,
              "name": "Swarm Intelligence",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 88,
              "name": "Molecular Computing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 84,
              "name": "Fog Computing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 83,
              "name": "DNA Computing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 76,
              "name": "Blockchain",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 87,
              "name": "Micromotes",
              "maturation": "2028",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 80,
              "name": "Containerisation",
              "maturation": "2029",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 89,
              "name": "Neuromorphic Computing",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 81,
              "name": "Creative Machines",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 86,
              "name": "Machine Vision",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        },
        {
          "id": 7,
          "name": "Materials",
          "children": [
            {
              "id": 112,
              "name": "Room Temperature Superconductors",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 110,
              "name": "Quantum Materials",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 103,
              "name": "Meta Materials",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 113,
              "name": "Self-Healing Materials",
              "maturation": "2038",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 106,
              "name": "Nanophotonic Materials",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 102,
              "name": "Mega Magnets",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 104,
              "name": "Nano Materials",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 100,
              "name": "Liquid Armour",
              "maturation": "2027",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 114,
              "name": "Smart Materials",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 97,
              "name": "Bio-Materials",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 101,
              "name": "Living Metals",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 105,
              "name": "Nano-Ceramics",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 109,
              "name": "Programmable Matter",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 96,
              "name": "Atomic Knots",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 115,
              "name": "Spray On Materials",
              "maturation": "2036",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 108,
              "name": "Polymers",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 111,
              "name": "Reactive Materials",
              "maturation": "2036",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 98,
              "name": "Flexible Electronics",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 107,
              "name": "Nanotubes",
              "maturation": "2027",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 99,
              "name": "Graphene",
              "maturation": "2029",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 116,
              "name": "Vascularised Nanocomposites",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        },
        {
          "id": 8,
          "name": "Robotics",
          "children": [
            {
              "id": 122,
              "name": "Molecular Robots",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 126,
              "name": "Swarm Robotics",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 119,
              "name": "Co-Bots",
              "maturation": "2031",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 125,
              "name": "Soft Robots",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 120,
              "name": "Drones",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 121,
              "name": "Exo Suits",
              "maturation": "2035",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 127,
              "name": "Utility Fog",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 117,
              "name": "Biohybrid Robots",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 124,
              "name": "Robots",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 118,
              "name": "Bots",
              "maturation": "2032",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 123,
              "name": "Nano Robots",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        },
        {
          "id": 9,
          "name": "Security",
          "children": [
            {
              "id": 132,
              "name": "Hackproof Code",
              "maturation": "2032",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 129,
              "name": "Behaviour Based Security",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 135,
              "name": "Morpheus Computing Platform",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 131,
              "name": "DNA Encryption",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 133,
              "name": "High Assurance Platforms",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 130,
              "name": "Biometrics",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 134,
              "name": "Identity Based Encryption",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 136,
              "name": "One Time Programs",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 138,
              "name": "Quantum Cryptography",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 137,
              "name": "Post Quantum Cryptography",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 128,
              "name": "Artificial Immune Systems",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 139,
              "name": "Self Patching Systems",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        },
        {
          "id": 10,
          "name": "Sensors",
          "children": [
            {
              "id": 143,
              "name": "Electromyography Sensors",
              "maturation": "2027",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 140,
              "name": "Backscatter Sensors",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 147,
              "name": "Micro Electro-Mechanical Sensors",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 142,
              "name": "Biosensors",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 151,
              "name": "Quantum Sensors",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 149,
              "name": "Multispectral Sensors",
              "maturation": "2032",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 146,
              "name": "Hyperspectral Sensors",
              "maturation": "2032",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 145,
              "name": "Graphene Sensors",
              "maturation": "2036",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 141,
              "name": "Biometric Sensors",
              "maturation": "2037",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 144,
              "name": "Electrophoresis Sensors",
              "maturation": "2031",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 150,
              "name": "Nano Electromechanical Sensors",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 148,
              "name": "Molybdenite Sensors",
              "maturation": "2026",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        },
        {
          "id": 11,
          "name": "User Interface",
          "children": [
            {
              "id": 167,
              "name": "Ultra High Definition Rendering",
              "maturation": "2028",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 158,
              "name": "Hapatics",
              "maturation": "2034",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 164,
              "name": "Personal Digital Assistants",
              "maturation": "2036",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 165,
              "name": "Screenless Displays",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 160,
              "name": "Naked Eye 3D",
              "maturation": "2030",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 155,
              "name": "Avatars",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 152,
              "name": "11K Displays",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 1
            },
            {
              "id": 168,
              "name": "Virtual Reality",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 166,
              "name": "Touch",
              "maturation": "2029",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 162,
              "name": "Natural Language Translation",
              "maturation": "2031",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 163,
              "name": "Neural Interfaces",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 159,
              "name": "Holograms",
              "maturation": "2050",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 153,
              "name": "360 Degree Video",
              "maturation": "2028",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 154,
              "name": "Augmented Reality",
              "maturation": "2033",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 156,
              "name": "Far Field Microphones",
              "maturation": "2028",
              "association": "DIRECT",
              "impact": 2
            },
            {
              "id": 157,
              "name": "Gesture Control",
              "maturation": "2024",
              "association": "DIRECT",
              "impact": 3
            },
            {
              "id": 161,
              "name": "Natural Language",
              "maturation": "2027",
              "association": "DIRECT",
              "impact": 3
            }
          ]
        }
      ]
    };

    var colors = {
      "Advanced Manufacturing": "#d30000",
      "Biotech": "#ed5b00",
      "Digital Connectivity": "#ff8a00",
      "Energy": "#a5be00",
      "Geoengineering": "#007600",
      "Machine Systems": "#00a9e8",
      "Materials": "#006395",
      "Robotics": "#8d6fff",
      "Security": "#77005c",
      "Sensors": "#c56290",
      "User Interface": "#a9004f"
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
