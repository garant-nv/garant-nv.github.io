﻿angular.module("app")
    .service("dataService", ["$http", function ($http) {
        this.mirrors = {
            0: { name: "mirror", url: "/images/common/cabinets/mirrors/1.jpg" },
            1: { name: "mirror_bronze", url: "/images/common/cabinets/mirrors/2.jpg" },
        };

   
        this.systemColors = {
            0: { name: "argentum", url: "/images/common/cabinets/systemcolors/cs1.jpg" },
            1: { name: "gold", url: "/images/common/cabinets/systemcolors/cs2.jpg" },
            2: { name: "champagne", url: "/images/common/cabinets/systemcolors/cs3.jpg" },
            3: { name: "wenge_gloss", url: "/images/common/cabinets/systemcolors/cs4.jpg" },
        };

        this.mdfs = {
            0: { name: "globes_pearl", url: "/images/common/cabinets/mdfs/1.jpg" },
            1: { name: "globes_bronze", url: "/images/common/cabinets/mdfs/2.jpg" },
            2: { name: "red_metallic", url: "/images/common/cabinets/mdfs/3.jpg" },
            3: { name: "burgundy_gloss", url: "/images/common/cabinets/mdfs/4.jpg" },
            4: { name: "lavender_bronze", url: "/images/common/cabinets/mdfs/5.jpg" },
            5: { name: "lavender_white", url: "/images/common/cabinets/mdfs/6.jpg" },
            6: { name: "shtroks_chocolate", url: "/images/common/cabinets/mdfs/7.jpg" },
            7: { name: "olive_shtroks", url: "/images/common/cabinets/mdfs/8.jpg" },
            8: { name: "flax_dark", url: "/images/common/cabinets/mdfs/9.jpg" },
        };

        this.hullColors = {
            0: { name: "color_cs1", url: "/images/common/cabinets/hull_ldsp_colors/1.jpg" },
            1: { name: "color_cs2", url: "/images/common/cabinets/hull_ldsp_colors/2.jpg" },
            2: { name: "color_cs3", url: "/images/common/cabinets/hull_ldsp_colors/3.jpg" },
            3: { name: "color_cs4", url: "/images/common/cabinets/hull_ldsp_colors/4.jpg" },
            4: { name: "color_cs5", url: "/images/common/cabinets/hull_ldsp_colors/5.jpg" },
            5: { name: "color_cs6", url: "/images/common/cabinets/hull_ldsp_colors/6.jpg" },
            6: { name: "color_cs7", url: "/images/common/cabinets/hull_ldsp_colors/7.jpg" },
            7: { name: "color_cs8", url: "/images/common/cabinets/hull_ldsp_colors/8.jpg" },
        };

        this.combiTypes = {
            0: { name: "p1", url: "/images/common/cabinets/kombitypes/1_1_1.jpg" },
            1: { name: "p2", url: "/images/common/cabinets/kombitypes/2_1_1.jpg" },
            2: { name: "p3", url: "/images/common/cabinets/kombitypes/2_2_1.jpg" },
            3: { name: "p4", url: "/images/common/cabinets/kombitypes/2_3_1.jpg" },

            4: { name: "p5", url: "/images/common/cabinets/kombitypes/3_1_1.jpg" },
            5: { name: "p6", url: "/images/common/cabinets/kombitypes/3_2_0.jpg" },
            6: { name: "p7", url: "/images/common/cabinets/kombitypes/3_3_0.jpg" },
            7: { name: "p8", url: "/images/common/cabinets/kombitypes/3_4_0.jpg" },

            8: { name: "p9", url: "/images/common/cabinets/kombitypes/3_5_0.jpg" },
            9: { name: "p10", url: "/images/common/cabinets/kombitypes/3_6_0.jpg" },
            10: { name: "p11", url: "/images/common/cabinets/kombitypes/4_1_0.jpg" },
            11: { name: "p12", url: "/images/common/cabinets/kombitypes/4_2_0.jpg" },

            12: { name: "p13", url: "/images/common/cabinets/kombitypes/4_3_0.jpg" },
            13: { name: "p14", url: "/images/common/cabinets/kombitypes/4_4_0.jpg" },
            14: { name: "p15", url: "/images/common/cabinets/kombitypes/4_5_0.jpg" },
            15: { name: "p16", url: "/images/common/cabinets/kombitypes/4_6_0.jpg" },

            16: { name: "p17", url: "/images/common/cabinets/kombitypes/5_1_0.jpg" },
            17: { name: "p18", url: "/images/common/cabinets/kombitypes/5_2_0.jpg" },
            18: { name: "p19", url: "/images/common/cabinets/kombitypes/5_3_0.jpg" },
            19: { name: "p20", url: "/images/common/cabinets/kombitypes/5_4_0.jpg" },

            20: { name: "p21", url: "/images/common/cabinets/kombitypes/5_5_0.jpg" },
            21: { name: "p22", url: "/images/common/cabinets/kombitypes/6_1_0.jpg" },
            22: { name: "p23", url: "/images/common/cabinets/kombitypes/6_2_0.jpg" },
            23: { name: "p24", url: "/images/common/cabinets/kombitypes/6_3_0.jpg" },

        }

        this.vsTypes = {
            0: { name: "bc_01", url: "/images/common/cabinets/vss/1.jpg" },
            1: { name: "bc_02", url: "/images/common/cabinets/vss/2.jpg" },
            2: { name: "bc_03", url: "/images/common/cabinets/vss/3.jpg" },
            3: { name: "bc_04", url: "/images/common/cabinets/vss/4.jpg" },

            4: { name: "bc_05", url: "/images/common/cabinets/vss/5.jpg" },
            5: { name: "bc_06", url: "/images/common/cabinets/vss/6.jpg" },
            6: { name: "bc_07", url: "/images/common/cabinets/vss/7.jpg" },
            7: { name: "bc_08", url: "/images/common/cabinets/vss/8.jpg" },

            8: { name: "bc_09", url: "/images/common/cabinets/vss/9.jpg" },
            9: { name: "bc_10", url: "/images/common/cabinets/vss/10.jpg" },
            10: { name: "bc_11", url: "/images/common/cabinets/vss/11.jpg" },
            11: { name: "bc_12", url: "/images/common/cabinets/vss/12.jpg" },

            12: { name: "bc_13", url: "/images/common/cabinets/vss/13.jpg" },
            13: { name: "bc_14", url: "/images/common/cabinets/vss/14.jpg" },
            14: { name: "bc_15", url: "/images/common/cabinets/vss/15.jpg" },
            15: { name: "bc_16", url: "/images/common/cabinets/vss/16.jpg" },

        };

        this.oracalColors = {
            0: { code: "023", name: "creamy", url: "/images/common/cabinets/oracal_colors/023.jpg" },
            1: { code: "025", name: "sulfur_yellow", url: "/images/common/cabinets/oracal_colors/025.jpg" },
            2: { code: "032", name: "light_red", url: "/images/common/cabinets/oracal_colors/032.jpg" },
            3: { code: "036", name: "light_orange", url: "/images/common/cabinets/oracal_colors/036.png" },

            4: { code: "040", name: "purple", url: "/images/common/cabinets/oracal_colors/040.jpg" },
            5: { code: "045", name: "light_pink", url: "/images/common/cabinets/oracal_colors/045.jpg" },
            6: { code: "053", name: "light_blue", url: "/images/common/cabinets/oracal_colors/053.jpg" },
            7: { code: "055", name: "minty", url: "/images/common/cabinets/oracal_colors/055.png" },

            8: { code: "063", name: "lilac_green", url: "/images/common/cabinets/oracal_colors/063.jpg" },
            9: { code: "066", name: "turquoise_blue", url: "/images/common/cabinets/oracal_colors/066.jpg" },
            10: { code: "068", name: "green_grass", url: "/images/common/cabinets/oracal_colors/068.jpg" },
            11: { code: "070", name: "black", url: "/images/common/cabinets/oracal_colors/070.jpg" },

            12: { code: "076", name: "asphaltic", url: "/images/common/cabinets/oracal_colors/076.jpg" },
            13: { code: "080", name: "brown", url: "/images/common/cabinets/oracal_colors/080.jpg" },
            14: { code: "082", name: "beige", url: "/images/common/cabinets/oracal_colors/082.jpg" },
            15: { code: "086", name: "bright_blue", url: "/images/common/cabinets/oracal_colors/086.jpg" },

            16: { code: "090", name: "silver_gray", url: "/images/common/cabinets/oracal_colors/090.jpg" },
            17: { code: "091", name: "golden", url: "/images/common/cabinets/oracal_colors/091.jpg" },
            18: { code: "312", name: "burgundy", url: "/images/common/cabinets/oracal_colors/312.jpg" },

        };

        //this.commonCabinetTexs = [
        //    "/images/common/cabinets/1-min.png",
        //    "/images/common/cabinets/2-min.png",
        //    "/images/common/cabinets/3-min.png",
        //    "/images/common/cabinets/4-min.png",
        //]

        this.kitchens = {
            "platinum": {
                "0": {
                    
                    name: "kit_p1",
                    url: "/images/common/kitchens/platinum/1.jpg"
                },
                "1":{
                    name: "kit_p2",
                    url: "/images/common/kitchens/platinum/2.jpg"
                },
                "2":{
                    name: "kit_p3",
                    url: "/images/common/kitchens/platinum/3.jpg"
                },
                "3":{
                    name: "kit_p4",
                    url: "/images/common/kitchens/platinum/4.jpg"
                },
                "4":{
                    name: "kit_p5",
                    url: "/images/common/kitchens/platinum/5.jpg"
                },
                "5":{
                    name: "kit_p6",
                    url: "/images/common/kitchens/platinum/6.jpg"
                },
                "6":{
                    name: "kit_p7",
                    url: "/images/common/kitchens/platinum/7.jpg"
                },
                "7":{
                    name: "kit_p8",
                    url: "/images/common/kitchens/platinum/8.jpg"
                },
                "8":{
                    name: "kit_p9",
                    url: "/images/common/kitchens/platinum/9.jpg"
                },
                "9":{
                    name: "kit_p10",
                    url: "/images/common/kitchens/platinum/10.jpg"
                },
                "10":{
                    name: "kit_p11",
                    url: "/images/common/kitchens/platinum/11.jpg"
                },
                "11":{
                    name: "kit_p12",
                    url: "/images/common/kitchens/platinum/12.jpg"
                },
            },
            "quadris": {
                "0":{
                    name: "kit_q1",
                    url: "/images/common/kitchens/quadris/1.jpg"
                },
                "1":{
                    name: "kit_q2",
                    url: "/images/common/kitchens/quadris/2.jpg"
                },
                "2":{
                    name: "kit_q3",
                    url: "/images/common/kitchens/quadris/3.jpg"
                },
                "3":{
                    name: "kit_q4",
                    url: "/images/common/kitchens/quadris/4.jpg"
                },
            },
            "sunrise": {
                "0":{
                    name: "kit_s1",
                    url: "/images/common/kitchens/sunrise/1.jpg"
                },
                "1":{
                    name: "kit_s2",
                    url: "/images/common/kitchens/sunrise/2.jpg"
                },
                "2":{
                    name: "kit_s3",
                    url: "/images/common/kitchens/sunrise/3.jpg"
                },
                "3":{
                    name: "kit_s4",
                    url: "/images/common/kitchens/sunrise/4.jpg"
                },
            },
            "elite": {
                "0":{
                    name: "kit_e1",
                    url: "/images/common/kitchens/elite/1.jpg"
                },
                "1":{
                    name: "kit_e2",
                    url: "/images/common/kitchens/elite/2.jpg"
                },
                "2":{
                    name: "kit_e3",
                    url: "/images/common/kitchens/elite/3.jpg"
                },
                "3":{
                    name: "kit_e4",
                    url: "/images/common/kitchens/elite/4.jpg"
                },
                "4":{
                    name: "kit_e5",
                    url: "/images/common/kitchens/elite/5.jpg"
                },
                "5":{
                    name: "kit_e6",
                    url: "/images/common/kitchens/elite/6.jpg"
                },
                "6":{
                    name: "kit_e7",
                    url: "/images/common/kitchens/elite/7.jpg"
                },
                "7":{
                    name: "kit_e8",
                    url: "/images/common/kitchens/elite/8.jpg"
                },
            },
            "frame": {
                "0":{
                    name: "kit_f1",
                    url: "/images/common/kitchens/frame/1.jpg"
                },
                "1":{
                    name: "kit_f2",
                    url: "/images/common/kitchens/frame/2.jpg"
                },
                "2":{
                    name: "kit_f3",
                    url: "/images/common/kitchens/frame/3.jpg"
                },
                "3":{
                    name: "kit_f4",
                    url: "/images/common/kitchens/frame/4.jpg"
                },
            },
            "glamor": {
                "0":{
                    name: "kit_g1",
                    url: "/images/common/kitchens/glamor/1.jpg"
                },
                "1":{
                    name: "kit_g2",
                    url: "/images/common/kitchens/glamor/2.jpg"
                },
                "2":{
                    name: "kit_g3",
                    url: "/images/common/kitchens/glamor/3.jpg"
                },
                "3":{
                    name: "kit_g4",
                    url: "/images/common/kitchens/glamor/4.jpg"
                },
                "4":{
                    name: "kit_g5",
                    url: "/images/common/kitchens/glamor/5.jpg"
                },
                "5":{
                    name: "kit_g6",
                    url: "/images/common/kitchens/glamor/6.jpg"
                },
                "6":{
                    name: "kit_g7",
                    url: "/images/common/kitchens/glamor/7.jpg"
                },
                "7":{
                    name: "kit_g8",
                    url: "/images/common/kitchens/glamor/8.jpg"
                },
                "8":{
                    name: "kit_g9",
                    url: "/images/common/kitchens/glamor/9.jpg"
                },
            },
            "contour": {
                "0":{
                    name: "kit_c1",
                    url: "/images/common/kitchens/contour/1.jpg"
                },
                "1":{
                    name: "kit_c2",
                    url: "/images/common/kitchens/contour/2.jpg"
                },
                "2":{
                    name: "kit_c3",
                    url: "/images/common/kitchens/contour/3.jpg"
                },
                "3":{
                    name: "kit_c4",
                    url: "/images/common/kitchens/contour/4.jpg"
                },
                "4":{
                    name: "kit_c5",
                    url: "/images/common/kitchens/contour/5.jpg"
                },
                "5":{
                    name: "kit_c6",
                    url: "/images/common/kitchens/contour/6.jpg"
                },
            },
            "modest": {
                "0":{
                    name: "kit_m1",
                    url: "/images/common/kitchens/modest/1.jpg"
                },
                "1":{
                    name: "kit_m2",
                    url: "/images/common/kitchens/modest/2.jpg"
                },
                "2":{
                    name: "kit_m3",
                    url: "/images/common/kitchens/modest/3.jpg"
                },
                "3":{
                    name: "kit_m4",
                    url: "/images/common/kitchens/modest/4.jpg"
                },
            },
            "horizon": {
                "0": { name: "horizont_taho", url: "/images/common/kitchens/horizon/horizont_taho.jpg" },
                "1": { name: "horizont_snw", url: "/images/common/kitchens/horizon/horizont_snw.jpg" },
                "2": { name: "horizont_ind", url: "/images/common/kitchens/horizon/horizont_ind.jpg" },
                "3": { name: "horizont_ship", url: "/images/common/kitchens/horizon/horizont_ship.jpg" },
                "4": { name: "horizont_nut_swiss", url: "/images/common/kitchens/horizon/horizont_nut_swiss.jpg" },
                "5": { name: "horizont_chmn_l", url: "/images/common/kitchens/horizon/horizont_chmn_l.jpg" },
                "6": { name: "horizont_chmn_d", url: "/images/common/kitchens/horizon/horizont_chmn_d.jpg" },
                "7": { name: "horizont_cream", url: "/images/common/kitchens/horizon/horizont_cream.jpg" },
                "8": { name: "horizont_indigo", url: "/images/common/kitchens/horizon/horizont_indigo.jpg" },
                "9": { name: "horizont_lime", url: "/images/common/kitchens/horizon/horizont_lime.jpg" },
                "10": { name: "horizont_turku", url: "/images/common/kitchens/horizon/horizont_turku.jpg" }
            },
            "vintage": {
                "0": { name: "vintage_pltn", url: "/images/common/kitchens/vintage/vintage_pltn.jpg" },
                "1": { name: "vintage_idstr", url: "/images/common/kitchens/vintage/vintage_idstr.jpg" },
                "2": { name: "vintage_clnd", url: "/images/common/kitchens/vintage/vintage_clnd.jpg" },
                "3": { name: "vintage_drkr", url: "/images/common/kitchens/vintage/vintage_drkr.jpg" },
                "4": { name: "vintage_brd", url: "/images/common/kitchens/vintage/vintage_brd.jpg" },
                "5": { name: "vintage_grft", url: "/images/common/kitchens/vintage/vintage_grft.jpg" },
                "6": { name: "vintage_ltt", url: "/images/common/kitchens/vintage/vintage_ltt.jpg" },
                "7": { name: "vintage_lvnd", url: "/images/common/kitchens/vintage/vintage_lvnd.jpg" },
                "8": { name: "vintage_rglt_l", url: "/images/common/kitchens/vintage/vintage_rglt_l.jpg" },
                "9": { name: "vintage_rglt_d", url: "/images/common/kitchens/vintage/vintage_rglt_d.jpg" }
            },
        };

        this.kitchenfacades = {
            "platinum": {
                0: {
                    name: "platinum_n1",
                     url: "/images/common/kitchens/platinum/facades/1.jpg",
                 },
                1:{
                    name: "platinum_n2",
                    url: "/images/common/kitchens/platinum/facades/2.jpg",
                },
                2: {
                    name: "platinum_n3",
                      url: "/images/common/kitchens/platinum/facades/3.jpg",
                  },
                3: {
                    name: "platinum_n4",
                      url: "/images/common/kitchens/platinum/facades/4.jpg",
                  },
                 4: {
                     name: "platinum_n5",
                      url: "/images/common/kitchens/platinum/facades/5.jpg",
                  },
                  5:{
                      name: "platinum_n6",
                      url: "/images/common/kitchens/platinum/facades/6.jpg",
                  },
                  6:{
                      name: "platinum_n7",
                      url: "/images/common/kitchens/platinum/facades/7.jpg",
                  },
                  7:{
                      name: "platinum_n8",
                      url: "/images/common/kitchens/platinum/facades/8.jpg",
                  },
                  8:{
                      name: "platinum_n9",
                      url: "/images/common/kitchens/platinum/facades/9.jpg",
                  },
                  9:{
                      name: "platinum_n10",
                      url: "/images/common/kitchens/platinum/facades/10.jpg",
                  },
                  10:{
                      name: "platinum_n11",
                      url: "/images/common/kitchens/platinum/facades/11.jpg",
                  },
                  11:{
                      name: "platinum_n12",
                      url: "/images/common/kitchens/platinum/facades/12.jpg",
                  },
        },
            "quadris": {
                  0:{
                      name: "quadris_n1",
                      url: "/images/common/kitchens/quadris/facades/1.jpg",
                  },
                  1:{
                      name: "quadris_n2",
                      url: "/images/common/kitchens/quadris/facades/2.jpg",
                  },
                  2:{
                      name: "quadris_n3",
                      url: "/images/common/kitchens/quadris/facades/3.jpg",
                  },
                  3:{
                      name: "quadris_n4",
                      url: "/images/common/kitchens/quadris/facades/4.jpg",
                  },
                  4:{
                      name: "quadris_n5",
                      url: "/images/common/kitchens/quadris/facades/5.jpg",
                  },
                  5: {
                      name: "quadris_n6",
                      url: "/images/common/kitchens/quadris/facades/6.jpg",
                  },
                  6:{
                      name: "quadris_n7",
                      url: "/images/common/kitchens/quadris/facades/7.jpg",
                  },
                  7:{
                      name: "quadris_n8",
                      url: "/images/common/kitchens/quadris/facades/8.jpg",
                  },
                  8:{
                      name: "quadris_n9",
                      url: "/images/common/kitchens/quadris/facades/9.jpg",
                  },
                  9:{
                      name: "quadris_n10",
                      url: "/images/common/kitchens/quadris/facades/10.jpg",
                  },
                  10: {
                      name: "quadris_n11",
                      url: "/images/common/kitchens/quadris/facades/11.jpg",
                  },
                  11:{
                      name: "quadris_n12",
                      url: "/images/common/kitchens/quadris/facades/12.jpg",
                  },
                  12:{
                      name: "quadris_n13",
                      url: "/images/common/kitchens/quadris/facades/13.jpg",
                  },
                  13: {
                      name: "quadris_n14",
                      url: "/images/common/kitchens/quadris/facades/14.jpg",
                  },
                  14:{
                      name: "quadris_n15",
                      url: "/images/common/kitchens/quadris/facades/15.jpg",
                  },
            },
            "sunrise": {
                  0:{
                      name: "sunrise_n1",
                      url: "/images/common/kitchens/sunrise/facades/1.jpg",
                  },
                  1:{
                      name: "sunrise_n2",
                      url: "/images/common/kitchens/sunrise/facades/2.jpg",
                  },
                  2:{
                      name: "sunrise_n3",
                      url: "/images/common/kitchens/sunrise/facades/3.jpg",
                  },
                  3:{
                      name: "sunrise_n4",
                      url: "/images/common/kitchens/sunrise/facades/4.jpg",
                  },
                  4:{
                      name: "sunrise_n5",
                      url: "/images/common/kitchens/sunrise/facades/5.jpg",
                  },
                  5:{
                      name: "sunrise_n6",
                      url: "/images/common/kitchens/sunrise/facades/6.jpg",
                  },
                  6:{
                      name: "sunrise_n7",
                      url: "/images/common/kitchens/sunrise/facades/7.jpg",
                  },
                  7:{
                      name: "sunrise_n8",
                      url: "/images/common/kitchens/sunrise/facades/8.jpg",
                  },
                  8:{
                      name: "sunrise_n9",
                      url: "/images/common/kitchens/sunrise/facades/9.jpg",
                  },
                  9:{
                      name: "sunrise_n10",
                      url: "/images/common/kitchens/sunrise/facades/10.jpg",
                  },
                  10:{
                      name: "sunrise_n11",
                      url: "/images/common/kitchens/sunrise/facades/11.jpg",
                  },
                  11:{
                      name: "sunrise_n12",
                      url: "/images/common/kitchens/sunrise/facades/12.jpg",
                  },
                  12:{
                      name: "sunrise_n13",
                      url: "/images/common/kitchens/sunrise/facades/13.jpg",
                  },
                  13:{
                      name: "sunrise_n14",
                      url: "/images/common/kitchens/sunrise/facades/14.jpg",
                  },
                  14:{
                      name: "sunrise_n15",
                      url: "/images/common/kitchens/sunrise/facades/15.jpg",
                  },

            },
            "elite": {
                  0:{
                      name: "elite_n1",
                      url: "/images/common/kitchens/elite/facades/1.jpg",
                  },
                  1:{
                      name: "elite_n2",
                      url: "/images/common/kitchens/elite/facades/2.jpg",
                  },
                  2:{
                      name: "elite_n3",
                      url: "/images/common/kitchens/elite/facades/3.jpg",
                  },
                  3:{
                      name: "elite_n4",
                      url: "/images/common/kitchens/elite/facades/4.jpg",
                  },
                  4:{
                      name: "elite_n5",
                      url: "/images/common/kitchens/elite/facades/5.jpg",
                  },
                  5:{
                      name: "elite_n6",
                      url: "/images/common/kitchens/elite/facades/6.jpg",
                  },
                  6:{
                      name: "elite_n7",
                      url: "/images/common/kitchens/elite/facades/7.jpg",
                  },
                  7:{
                      name: "elite_n8",
                      url: "/images/common/kitchens/elite/facades/8.jpg",
                  },
                  8:{
                      name: "elite_n9",
                      url: "/images/common/kitchens/elite/facades/9.jpg",
                  },
                  9:{
                      name: "elite_n10",
                      url: "/images/common/kitchens/elite/facades/10.jpg",
                  },
                  10:{
                      name: "elite_n11",
                      url: "/images/common/kitchens/elite/facades/11.jpg",
                  },
                  11:{
                      name: "elite_n12",
                      url: "/images/common/kitchens/elite/facades/12.jpg",
                  },
                  12:{
                      name: "elite_n13",
                      url: "/images/common/kitchens/elite/facades/13.jpg",
                  },
            },
            "frame": {
                0:{
                    name: "frame_n1",
                      url: "/images/common/kitchens/frame/facades/1.jpg",
                  },
                1:{
                    name: "frame_n2",
                      url: "/images/common/kitchens/frame/facades/2.jpg",
                  },
                2:{
                    name: "frame_n3",
                      url: "/images/common/kitchens/frame/facades/3.jpg",
                  },
                3:{
                    name: "frame_n4",
                      url: "/images/common/kitchens/frame/facades/4.jpg",
                  },
                4:{
                    name: "frame_n5",
                      url: "/images/common/kitchens/frame/facades/5.jpg",
                  },
                5:{
                    name: "frame_n6",
                     url: "/images/common/kitchens/frame/facades/6.jpg",
                  },
            },
            "glamor": {
                0:{
                    name: "glamor_n1",
                      url: "/images/common/kitchens/glamor/facades/1.jpg",
                  },
                1:{
                    name: "glamor_n2",
                      url: "/images/common/kitchens/glamor/facades/2.jpg",
                  },
                2:{
                    name: "glamor_n3",
                      url: "/images/common/kitchens/glamor/facades/3.jpg",
                  },
                3:{
                    name: "glamor_n4",
                      url: "/images/common/kitchens/glamor/facades/4.jpg",
                  },
                4:{
                    name: "glamor_n5",
                      url: "/images/common/kitchens/glamor/facades/5.jpg",
                  },
                5:{
                    name: "glamor_n6",
                      url: "/images/common/kitchens/glamor/facades/6.jpg",
                  },
                6:{
                    name: "glamor_n7",
                      url: "/images/common/kitchens/glamor/facades/7.jpg",
                  },
                7:{
                    name: "glamor_n8",
                      url: "/images/common/kitchens/glamor/facades/8.jpg",
                  },
                8:{
                    name: "glamor_n9",
                      url: "/images/common/kitchens/glamor/facades/9.jpg",
                  },
                9:{
                    name: "glamor_n10",
                      url: "/images/common/kitchens/glamor/facades/10.jpg",
                  },
                10:{
                    name: "glamor_n11",
                      url: "/images/common/kitchens/glamor/facades/11.jpg",
                  },
                11:{
                    name: "glamor_n12",
                      url: "/images/common/kitchens/glamor/facades/12.jpg",
                  },
                12:{
                    name: "glamor_n13",
                      url: "/images/common/kitchens/glamor/facades/13.jpg",
                  },

            },
            "contour": {
                0:{
                    name: "contour_n1",
                      url: "/images/common/kitchens/contour/facades/1.jpg",
                  },
                1: {
                    name: "contour_n2",
                       url: "/images/common/kitchens/contour/facades/2.jpg",
                   },
                2:  {
                    name: "contour_n3",
                        url: "/images/common/kitchens/contour/facades/3.jpg",
                    },
                3:   {
                    name: "contour_n4",
                         url: "/images/common/kitchens/contour/facades/4.jpg",
                     },
                4:    {
                    name: "contour_n5",
                          url: "/images/common/kitchens/contour/facades/5.jpg",
                      },
                5:     {
                    name: "contour_n6",
                           url: "/images/common/kitchens/contour/facades/6.jpg",
                       },
            },
            "modest": {
                0: {
                    name: "modest_n1",
                       url: "/images/common/kitchens/modest/facades/1.jpg",
                   },
                1:{
                    name: "modest_n2",
                      url: "/images/common/kitchens/modest/facades/2.jpg",
                  },
                2:{
                    name: "modest_n3",
                      url: "/images/common/kitchens/modest/facades/3.jpg",
                  },
                3:{
                    name: "modest_n4",
                      url: "/images/common/kitchens/modest/facades/4.jpg",
                  },
                4:{
                    name: "modest_n5",
                      url: "/images/common/kitchens/modest/facades/5.jpg",
                  },
                5:{
                    name: "modest_n6",
                      url: "/images/common/kitchens/modest/facades/6.jpg",
                  },
                6:{
                    name: "modest_n7",
                      url: "/images/common/kitchens/modest/facades/7.jpg",
                  },
                7: {
                    name: "modest_n8",
                      url: "/images/common/kitchens/modest/facades/8.jpg",
                  }

            }

        };

        this.kitchenCommons = [
            { name: "cmod1", url: "/images/common/kitchens/mod1.png" },
            { name: "cmod2", url: "/images/common/kitchens/mod2.png" },
            { name: "cmod3", url: "/images/common/kitchens/mod3.png" },
            { name: "cmod4", url: "/images/common/kitchens/mod4.png" },
            { name: "cmod5", url: "/images/common/kitchens/mod5.png" },
            { name: "cmod6", url: "/images/common/kitchens/mod6.png" },
            { name: "cmod7", url: "/images/common/kitchens/mod7.png" },
            { name: "cmod8", url: "/images/common/kitchens/mod8.png" },
            { name: "cmod9", url: "/images/common/kitchens/mod9.png" },
            { name: "cmod10", url: "/images/common/kitchens/mod10.png" },
        ]

        

        this.getKitchens = function (type) {
            return this.kitchens[type];
        };
        this.getFurnitures = function () {

            return [
                {
                    id: 0,
                    image: "/images/common/furnitures/1.jpg"
                },
                {
                    id: 1,
                    image: "/images/common/furnitures/2.jpg"
                },
                {
                    id: 2,
                    image: "/images/common/furnitures/3.jpg"
                },
                {
                    id: 3,
                    image: "/images/common/furnitures/4.jpg"
                }
            ];
        }

        this.getHullTypes = function () {

            return {
                0: { name: "яблуня локарно", url: "" },
            }
        }
        this.getCabinets = function (type) {
           
            return $http.get("/data/cabinets."+type+".json").then(function (response) {
                console.log(angular.fromJson(response.data));
                return angular.fromJson(response.data);
            })
        }

       
    }])