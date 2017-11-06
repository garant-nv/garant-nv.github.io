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
            7: { name: "olive_shtroks", url: "/images/common/cabinets/mdfs/9.jpg" },
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
            1: { name: "bc_01", url: "/images/common/cabinets/vss/2.jpg" },
            2: { name: "bc_01", url: "/images/common/cabinets/vss/3.jpg" },
            3: { name: "bc_01", url: "/images/common/cabinets/vss/4.jpg" },

            4: { name: "bc_01", url: "/images/common/cabinets/vss/5.jpg" },
            5: { name: "bc_01", url: "/images/common/cabinets/vss/6.jpg" },
            6: { name: "bc_01", url: "/images/common/cabinets/vss/7.jpg" },
            7: { name: "bc_01", url: "/images/common/cabinets/vss/8.jpg" },

            8: { name: "bc_01", url: "/images/common/cabinets/vss/9.jpg" },
            9: { name: "bc_01", url: "/images/common/cabinets/vss/10.jpg" },
            10: { name: "bc_01", url: "/images/common/cabinets/vss/11.jpg" },
            11: { name: "bc_01", url: "/images/common/cabinets/vss/12.jpg" },

            12: { name: "bc_01", url: "/images/common/cabinets/vss/13.jpg" },
            13: { name: "bc_01", url: "/images/common/cabinets/vss/14.jpg" },
            14: { name: "bc_01", url: "/images/common/cabinets/vss/15.jpg" },
            15: { name: "bc_01", url: "/images/common/cabinets/vss/16.jpg" },

        };

        this.oracalColors = {
            0: { code: "023", name: "creamy", url: "/images/common/cabinets/oracal_colors/023.jpg" },
            1: { code: "025", name: "sulfur_yellow", url: "/images/common/cabinets/oracal_colors/025.jpg" },
            2: { code: "032", name: "light_red", url: "/images/common/cabinets/oracal_colors/032.jpg" },
            3: { code: "036", name: "light_orange", url: "/images/common/cabinets/oracal_colors/036.jpg" },

            4: { code: "040", name: "purple", url: "/images/common/cabinets/oracal_colors/040.jpg" },
            5: { code: "045", name: "light_pink", url: "/images/common/cabinets/oracal_colors/045.jpg" },
            6: { code: "053", name: "light_blue", url: "/images/common/cabinets/oracal_colors/053.jpg" },
            7: { code: "055", name: "minty", url: "/images/common/cabinets/oracal_colors/055.jpg" },

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

        this.commonCabinetTexs = [
            "/images/common/cabinets/1-min.png",
            "/images/common/cabinets/2-min.png",
            "/images/common/cabinets/3-min.png",
            "/images/common/cabinets/4-min.png",
        ]

        this.kitchenfacades = {
            "platinum": [
                 {
                     name: "",
                     url: "/images/common/kitchens/platinum/facades/1.jpg",
                 },
                  {
                      name: "",
                      url: "/images/common/kitchens/platinum/facades/2.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/platinum/facades/3.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/platinum/facades/4.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/platinum/facades/5.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/platinum/facades/6.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/platinum/facades/7.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/platinum/facades/8.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/platinum/facades/9.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/platinum/facades/10.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/platinum/facades/11.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/platinum/facades/12.jpg",
                  },

            ],
            "quadris": [
                  {
                      name: "",
                      url: "/images/common/kitchens/quadris/facades/1.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/quadris/facades/2.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/quadris/facades/3.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/quadris/facades/4.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/quadris/facades/5.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/quadris/facades/6.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/quadris/facades/7.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/quadris/facades/8.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/quadris/facades/9.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/quadris/facades/10.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/quadris/facades/11.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/quadris/facades/12.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/quadris/facades/13.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/quadris/facades/14.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/quadris/facades/15.jpg",
                  },
            ],
            "sunrise": [
                  {
                      name: "",
                      url: "/images/common/kitchens/sunrise/facades/1.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/sunrise/facades/2.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/sunrise/facades/3.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/sunrise/facades/4.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/sunrise/facades/5.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/sunrise/facades/6.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/sunrise/facades/7.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/sunrise/facades/8.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/sunrise/facades/9.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/sunrise/facades/10.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/sunrise/facades/11.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/sunrise/facades/12.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/sunrise/facades/13.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/sunrise/facades/14.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/sunrise/facades/15.jpg",
                  },

            ],
            "elite": [
                  {
                      name: "",
                      url: "/images/common/kitchens/elite/facades/1.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/elite/facades/2.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/elite/facades/3.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/elite/facades/4.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/elite/facades/5.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/elite/facades/6.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/elite/facades/7.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/elite/facades/8.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/elite/facades/9.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/elite/facades/10.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/elite/facades/11.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/elite/facades/12.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/elite/facades/13.jpg",
                  },
            ],
            "frame": [
                  {
                      name: "",
                      url: "/images/common/kitchens/frame/facades/1.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/frame/facades/2.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/frame/facades/3.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/frame/facades/4.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/frame/facades/5.jpg",
                  },
                  {
                     name: "",
                     url: "/images/common/kitchens/frame/facades/6.jpg",
                  },
            ],
            "glamor": [
                  {
                      name: "",
                      url: "/images/common/kitchens/glamor/facades/1.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/glamor/facades/2.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/glamor/facades/3.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/glamor/facades/4.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/glamor/facades/5.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/glamor/facades/6.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/glamor/facades/7.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/glamor/facades/8.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/glamor/facades/9.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/glamor/facades/10.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/glamor/facades/11.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/glamor/facades/12.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/glamor/facades/13.jpg",
                  },

            ],
            "contour": [
                  {
                      name: "",
                      url: "/images/common/kitchens/contour/facades/1.jpg",
                  },
                   {
                       name: "",
                       url: "/images/common/kitchens/contour/facades/2.jpg",
                   },
                    {
                        name: "",
                        url: "/images/common/kitchens/contour/facades/3.jpg",
                    },
                     {
                         name: "",
                         url: "/images/common/kitchens/contour/facades/4.jpg",
                     },
                      {
                          name: "",
                          url: "/images/common/kitchens/contour/facades/5.jpg",
                      },
                       {
                           name: "",
                           url: "/images/common/kitchens/contour/facades/6.jpg",
                       },
            ],
            "modest": [
                   {
                       name: "",
                       url: "/images/common/kitchens/modest/facades/1.jpg",
                   },
                  {
                      name: "",
                      url: "/images/common/kitchens/modest/facades/2.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/modest/facades/3.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/modest/facades/4.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/modest/facades/5.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/modest/facades/6.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/modest/facades/7.jpg",
                  },
                  {
                      name: "",
                      url: "/images/common/kitchens/modest/facades/8.jpg",
                  },

            ],

        }

        this.getKitchens = function () {
            return {}
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
            type = "two-door";
            return $http.get("/data/cabinets."+type+".json").then(function (response) {
                console.log(angular.fromJson(response.data));
                return angular.fromJson(response.data);
            })
        }

    }])