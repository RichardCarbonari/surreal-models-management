export type ModelCategory = "feminino" | "masculino" | "desenvolvimento";

export interface Model {
  id: string;
  slug: string;
  name: string;
  category: ModelCategory;
  coverImage: string;
  images: string[];
  polaroids: string[];
  height: string;
  bust?: string;
  waist: string;
  hips?: string;
  shoes: string;
  eyes: string;
  hair: string;
  nationality: string;
  age?: number;
  instagram?: string;
  shirts?: string;
  pants?: string;
  portfolio?: string;
  featured?: boolean;
}

const d = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

export const models: Model[] = [
  {
    id: "3", slug: "bernardo-balsanic", name: "Bernardo Balsanic", category: "masculino",
    coverImage: d("1HQ2YJfRP9Uymgp3qVYuJgq2kU7isH-TO"),
    images: [d("1HQ2YJfRP9Uymgp3qVYuJgq2kU7isH-TO"),d("1PBAiivYOdzh9QYJ08EDqBAUzzIl2-X5m"),d("1SI4NDTVgsD8TiDivWmOgMHJy1PECFsst"),d("17dAaERquRclF9Zg9z8OC7SWjsKSHoUD7"),d("1TYcnj_JsL7olMqL3OMRrePXCq3GD7_5k"),d("1q0zVdrBwEuu3yWQKy4wSChec-ZnhxtRz"),d("12l3ZBp8LvVcTNkgAJbhp9SQNSwL4FTGe"),d("1PfIY3i4VrmLyCfHtdRt19hmp95NRaT4n"),d("1JxAARtnAz56Uavjiih6nKQA3cgAn7Pfk"),d("17xZgoXLONNXi4Ch1LzMRjBIWlytQnjrN"),d("1ANBo1_JT3ZjJRYRiUGcrtfThcHd1ghrN"),d("1AOUlxBxDMDYF6LbZHnlywTB8SZnVJiEg")],
    polaroids: [], height: "1,86m", bust: "90cm", waist: "75cm", hips: "88cm", shoes: "42", eyes: "Verdes", hair: "Castanho", nationality: "Brasileiro", age: 22, featured: true,
  },
  {
    id: "10", slug: "clara-albuquerque", name: "Clara Albuquerque", category: "feminino",
    coverImage: d("1YX1Cb7rZgvFksrO4zhvCq_IDmJ1hn0uJ"),
    images: [d("1YX1Cb7rZgvFksrO4zhvCq_IDmJ1hn0uJ"),d("1mvb1PuXbFMxZPmaCUv1T2Td0kbz0Qwd_"),d("1fCgnE9W-kjMBtuOvM8k2OGlazd3yWByY"),d("1gcbm56ispFFFmkQmLlid1NbJjM_NbXQw"),d("1erBiKRO45zn5HRlc7qfSFNDGyIMEr3JS"),d("1078nkZvNagrwrYRag7whs6f1oxB-EJP4"),d("1BLMzQCn20sFpwzfQMYacVL-YQ2zkqWot"),d("18cVpaBZ5kmw5CGMSoyFP9zrLtSpslilk"),d("1n8LIjoHpyLTI6KXL2U79BVSRImWobq-6"),d("1T3BZ_bzC2mncDLP9zVx0qi8f8k-wvPt1"),d("1X85m4srtMKfdrpeLspfVP4Tixb9jeTRP"),d("1-zysPf02YBDBwXeNc_DMjLwsWtxL6tdp"),d("1bsLsQae8c3je293L_Wzpy5uCVX5_1nq4"),d("1nkS1ZY3cjPOlQ9fPZhy_pd5F1rjeW7O5"),d("1qUJpq7kaO5fDqZQNQkmSfepJEJ_aP56V"),d("1KxdVCn0iURp66h2sJqTKst7z1Hnblj61"),d("1eY1lEIC8YzckLYGoZbNk8Nd1fKdoN52o")],
    polaroids: [], height: "1,75m", bust: "79cm", waist: "62cm", hips: "92cm", shoes: "37", eyes: "Castanhos", hair: "Preto", nationality: "Brasileira", age: 21, featured: true,
  },
  {
    id: "4", slug: "emad", name: "Emad", category: "masculino",
    coverImage: d("1A_cyOQj7z42k0ysC1Tr-n_XW5RUF4YrK"),
    images: [d("1A_cyOQj7z42k0ysC1Tr-n_XW5RUF4YrK"),d("1JnP7W0DHeBUeR4jTUBwpeKOEROd6XHJn"),d("1QaOhJ2qiBnDNfVGGlaxAsMx16xlz2ZmQ"),d("1JlCy41O0UkCjahGq4p-GHOnriUPzSJ4K"),d("1GKijZ-fIaSJpiGzPQHxmPMoElamnp6Px"),d("1tLdgLceF4mmbVPGJWIvan1k1oRmkdGB7"),d("1dP5jUjwU7uGenYlOtZ_fGjgUO0kTSEOu"),d("1PV2mfCDs7bm1Rdb9UAzP0gxL4C--Daxb"),d("19K0pY6MF1o_1e6IzKDvV8mfbbt9ITvmM"),d("1Qz_5PRileimilBO17co1S8nLpVxAEfQ-"),d("1jzvVxzWwnwGfuODcjOOz4eYHBkhEmeER"),d("1tzcV9k8zliTeD3lmNaqjWK6ncrrQapSX"),d("1PkX6UAzMsIM3vdceQ-rtP92gkwghjfcG")],
    polaroids: [], height: "1,85m", bust: "94cm", waist: "75cm", hips: "90cm", shoes: "44", eyes: "Castanhos", hair: "Preto", nationality: "Brasileiro", age: 24,
  },
  {
    id: "14", slug: "fernanda-faleiro", name: "Fernanda Faleiro", category: "feminino",
    coverImage: d("1DLyrt3f0s8Gv0IMOa4X0WpVVH6IMdliV"),
    images: [d("1DLyrt3f0s8Gv0IMOa4X0WpVVH6IMdliV"),d("1W4gzdSI-xxCrynyDFSXhylIU4rgbUM8M"),d("1Y1S7XFwvPn6kr--GgR_XTGhghUPpLbWo"),d("1s5HtF5IKKqlvFN-PCS6x-17s3e2pCS4g"),d("1o7-mmzQtKyESZnEtvHI2TCAGVp2hrE0R"),d("12fjo6pCBtI7TtOCLg03UHqlDA7dte8fC"),d("1SxOO2U8bW1D25yaWCYFQxTUO4ll_XzW5"),d("1XUzcATw8OPuzBWmwDoA9GXtBxocKcPR0"),d("15x2kCuvkjaq-Vl0C1IO9EvNC25PeXsom")],
    polaroids: [], height: "1,75m", bust: "80cm", waist: "60cm", hips: "91cm", shoes: "37", eyes: "Castanhos", hair: "Castanho", nationality: "Brasileira", age: 21,
  },
  {
    id: "16", slug: "giovana-peixoto", name: "Giovana Peixoto", category: "feminino",
    coverImage: d("1YIgOBx-qcml5XzDWw-FLp9v4UlerboYA"),
    images: [d("1YIgOBx-qcml5XzDWw-FLp9v4UlerboYA"),d("18jaynPT2zb-BrE0R3E8kGpKI8Z7__9LD"),d("1cuLs5ioHKp8nXG5xQDxhAKp_uYLIU2-z"),d("1wBvH5BUJeKhgERD3yZ3badYESR2I8xy7"),d("1GSRVEr5K3g3zlAGwtL5xuLwQ2JQBNW-I"),d("1PITCbiNuR6izfl0-VzBmf5C1E2q0ITKo"),d("154YpjR9Zdk5ePIijNbDWi5crhQgiQ8cD"),d("1lKyLnF9qTnPEpbbn8Qxb9dyP4Nv0iu_y"),d("1pduPL0i5icQ-_Gfo-HHsB7AVSiRvGUU1"),d("1MyeBKnsfUi82I_-dSXFlR-meFY-zHofn"),d("1sBi3jkIPQLmr-t_CxKQTXe2hOBYYeS8p"),d("14rWqjdk7SGGA7hs0FP-vP62DismJzCk_"),d("167g-fSMJqlbpcYQTnxyoc-ukiwpKzKhy"),d("1wFYkG5jtM4kfFyDaJ-rqEqji9TDef7v1"),d("1-BOJeGU3ek2_iWMQSNzDf7uSi6SpYxdl"),d("1Sx6azXPifP221ogFRjuOA9WlNBjP4cZA"),d("1qzPxo5a_SYnC9cfSOrgfrGnJowUHqzUr")],
    polaroids: [], height: "1,70m", bust: "82cm", waist: "63cm", hips: "93cm", shoes: "37", eyes: "Castanhos", hair: "Castanho", nationality: "Brasileira", age: 20,
  },
  {
    id: "9", slug: "guilherme-cajaiba", name: "Guilherme Cajaiba", category: "masculino",
    coverImage: d("1UzBwqDxFBX3FZP5fWxb2fBiGQOC4qPeL"),
    images: [d("1UzBwqDxFBX3FZP5fWxb2fBiGQOC4qPeL"),d("1nHt81x3qCqFN5If6Zqo0sioDpXagRcia"),d("1lXtG7rDSfy3Dj3cD6KxrIr_LmGiV6rGY"),d("1RUFn1oysl2sqwUz7g9N8WZl2zBh-5efY"),d("1KpPVCzQoAgEDopQbXBrVfg1n16yBFAa1"),d("186sXJMeQlFjzUmFZQsEQChgp5XMavvL2"),d("1onaLEvqfu_z67_OXLac_MlOklxvk8ovj"),d("1SY56bmLDudPqjC3nsjtnA9zCGFgT7GxV"),d("18pOdJhHpySBruGk0jvgqCoOY8YgXkgW7"),d("15aeRnYBMcig7gRK03eMRjGpfsXJ3Qblv"),d("1Kn7Kgk6gxoXFsfkm-_f8Y8owF_9YRS6J"),d("1dxQMUpfc8A850Q8zFLiyskcGcUP3HrB4"),d("1d00BmJPjBvFo7Z-wgJrFhTrQQ9qrPzMx")],
    polaroids: [], height: "1,88m", bust: "92cm", waist: "75cm", hips: "91cm", shoes: "43", eyes: "Castanhos", hair: "Castanho", nationality: "Brasileiro", age: 23,
  },
  {
    id: "8", slug: "guss-camargo", name: "Guss Camargo", category: "masculino",
    coverImage: d("1w7T0D9ftguujG9klWLWSnvU8fDbG4rG3"),
    images: [d("1w7T0D9ftguujG9klWLWSnvU8fDbG4rG3"),d("179m_VHoG75a5wJfSXJcZ3WTdanL1i6CU"),d("1EFDdZTIiB3-HXUM65EBcH3XSqxgfeD9m"),d("1L68mUjIITLc27Rm2bHgBwpFO8LRlMJ22"),d("1L1PeQLd6IuQjQ9y4xBvuuz2jp4FP6whZ"),d("1-N_gReE-9gVSZ4KwOrun-rt8SslnmPYT"),d("1668xrbqAkpPu5DSAO_rm0TPVJKJ3EDLe"),d("1iiLOFvATblNLl3vDJNXYPSzVZCnuKRVp"),d("1iYJOaGJxV2o8tWFH6tIGmMyrWHvkR0BN"),d("1uWXzTEtMqSJi7_SY4I9q8vjzJ4xOYlw9"),d("1CfjKUabMoeSr37Wod8ylSqo9oq2b2aFQ"),d("1FlyuI-Ekt1Ma3boISoRkTi3nV60KdDRd"),d("1e9WAkx69hbUfdj52Nvs7Q4BNRPy20zv9"),d("1q-xHLrvr9LL_Tss8Mt_2_VR9HLLAQJSB")],
    polaroids: [], height: "192cm", bust: "92cm", waist: "74cm", hips: "88cm", shoes: "44 EU",
    shirts: "M", pants: "40x42", eyes: "Dark Brown", hair: "Black", nationality: "Brasileiro", age: 22,
    instagram: "https://www.instagram.com/imguss__/",
    portfolio: "https://drive.google.com/drive/folders/1JIOUE9n3oZ6JsoVFmOPbukSN9HWDHT9r",
    featured: true,
  },
  {
    id: "12", slug: "iza-mazotti", name: "Iza Mazotti", category: "feminino",
    coverImage: d("16t4stUrtuHJ12aIvh2kPRkJgq3zoCnW8"),
    images: [d("16t4stUrtuHJ12aIvh2kPRkJgq3zoCnW8"),d("1REsEhUSHCb4xR9Ixes8Bx1_IrggCiTgj"),d("1rXy32D2RYSiV1JRzCzImA6i5_S1TYc8E"),d("14IL99hnKKBPi6sDLdxQ3PvKP_FBBmJNJ"),d("1L1Th2qgfomnvrwPi0X7JyXWdiEvpy6mG"),d("1OTbDjJBtTA3yxdX6SF_U4LCRogyYIII4"),d("1wCOOy6T0oLl78J37DB5yQdg_H97VpvZY"),d("1r3keAbbUHW2CAxpCNLUhAI0UBR2HjWtp"),d("1x0Euk604n4v098mpXjcdwWLjPVp-fupl"),d("1swGA9UeSfQIbo-Vqmjka4rQj8oMfzVA5"),d("1diL3vjQJTmrf2fPfgwsBw2BR3SwxjoqQ"),d("1hN2xZOc441-S6bx8AghhszZMdNkqsGNx")],
    polaroids: [], height: "1,78m", bust: "81cm", waist: "60cm", hips: "89cm",
    shoes: "40/41 EU", shirts: "S", pants: "38 EU",
    eyes: "Brown", hair: "Brown", nationality: "Brasileira", age: 20,
    instagram: "https://www.instagram.com/iza_mazotti/",
    portfolio: "https://drive.google.com/drive/folders/1GFH8AhUnDEG9DJOS2JFosUw7MSVJ8pzK",
    featured: true,
  },
  {
    id: "15", slug: "jullie-rocha", name: "Jullie Rocha", category: "feminino",
    coverImage: d("1OhZnEla-2Y7yO4l0QhsRiWIKYA88k0Nv"),
    images: [d("1OhZnEla-2Y7yO4l0QhsRiWIKYA88k0Nv"),d("1JFK3Pf-r78kfHay6jJ0Kg-43T-YzSJfg"),d("1dZQT4LV7BP6GD8NMSaAOa9niIIvucND3"),d("1HtrjxIMWAOrOuZw2xnneR7yjbfqXNWVr"),d("1y9gkp20proJGbfKHemGXluQgi8Z1ahjX"),d("1kbRTeuPEOxpi4e4xga6GuYsUrLkr3YSa"),d("1kj9ELBmk71GgE-oGztyAyXuXZSzAFEIB"),d("1fuybtLeYgF6hC87acm6XLI9V2jD4h94c"),d("1Qa_3bbL6dAK-ErYXiGbbdySSE1Y3LolM"),d("1WcfJhu3lHOeac6qFflWq88Bv2E7DcYa0"),d("1-YQSZZB0foG1G1numyZE275ifmrHTFNM"),d("1ifTQLN48A1lB4DBzV6SbRrj1Xa-CLIaj")],
    polaroids: [], height: "1,70m", bust: "83cm", waist: "63cm", hips: "94cm", shoes: "38", eyes: "Castanhos", hair: "Preto", nationality: "Brasileira", age: 22,
  },
  {
    id: "2", slug: "junior-benevides", name: "Junior Benevides", category: "masculino",
    coverImage: d("1qNC1XkSPLye8uSPQ-zyZA_a7rkTMq6rj"),
    images: [d("1qNC1XkSPLye8uSPQ-zyZA_a7rkTMq6rj"),d("13a8fpwoD5AzbQPmVgsfnSktvKooHWD--"),d("1CgTpHjxFgmnbo2IaHo00LCOLmt-LbmVF"),d("1GofjHf6f2aaNywMS_rvE2231HO0Yi4ka"),d("19RbUQNwHww8J6n5JcF53mmzfty2xhLC7"),d("1XUc8-OYla1ga4L6opZT-jDdoVwVptE11"),d("1ChAamB9p7bvUOGJiyUXsdxyGkm8c6WrY"),d("1ug_UzwcQJn5tHwV8Nu8tw0-rhuiGVvSb"),d("1gavX3LabcwSzV1dzgKcImMfFC1SlewCm"),d("15hfgTUOj1OYNo-2LAJ3Ckp0PShl1Yyki"),d("1fgrZVFG4maICYyjnTrH1isDkIMY4Io6Q"),d("1AIxsfvbidOhxG_uu9dyU1tL5BG62Jlxh")],
    polaroids: [], height: "1,85m", waist: "78cm", shoes: "42", eyes: "Castanhos", hair: "Preto", nationality: "Brasileiro", age: 23, featured: true,
  },
  {
    id: "5", slug: "kareem", name: "Kareem", category: "masculino",
    coverImage: d("11DI2vjqPhyiBfhbxRC1YrduFvvwpUEOh"),
    images: [d("11DI2vjqPhyiBfhbxRC1YrduFvvwpUEOh"),d("1gZYMiCMzsGIXHK6J6udeFX7YbXFN28tH"),d("1l6qiVdAtu05VkG4WdTfI-NJsX4kfHa-L"),d("13ql8SvbkeXDKcnsm6AdeZ7MZBAYbP-2L"),d("1JpYT7v_8mkd-7U04NBkX4XX-37lo6Wy3"),d("1ccYHf9cDfewjOqQO-Ddm1RTzA2NVa_9A"),d("1Nd4voUcpXmjxlYlXqT4RWKM7CpPhTQC3"),d("1gaeGZ6ewPsz2nZNNaliFQmXmO16ouAxU"),d("1lPyHEv4rojtktwIaPMgOroLQkDHZsiA5"),d("1hmq1D_87yg0AXcDuK-qLdXenfRkldN0N"),d("1tNRYZQ4v5g6rWgwViX78v16TaEsWQ96A"),d("1rFRl9cFMBmpEciRoe181iVcOmS8AgPr-"),d("1FrWHA8eJ-YbG8fGteJPnxFH8g2GJHuwm"),d("1D_5UX3UsmRmr_Hp7nTNwSi4dNhw7_wxF")],
    polaroids: [], height: "1,89m", bust: "90cm", waist: "74cm", hips: "88cm", shoes: "44", eyes: "Castanhos", hair: "Preto", nationality: "Egípcio", age: 26,
  },
  {
    id: "7", slug: "matheus-cunha", name: "Mateus Cunha", category: "masculino",
    coverImage: d("19-k9GN4fRLYzXJQBbzyn1t7WbaQSt8Ku"),
    images: [d("19-k9GN4fRLYzXJQBbzyn1t7WbaQSt8Ku"),d("133ZFjfaBhHba664lttLWbCTqjVzIWS6p"),d("1RMtgWqkPoYfHTqham2Y3VwWfdIjqgUZw"),d("11Nu5MYmMrmaP5VCz3tmmCqsChkXHLlqQ"),d("1BFjPtQzYxWHyAs1bXDJYuhDhVOOrkGKA"),d("1kOOrWcGJA9x6UHq7QaTAfNegmO7g4abr"),d("1kslTibmAit2WkFX22dXi6yvKl4QARqwG"),d("185daWdO2Z7LR8OeQCLwFGbHTnQjvZ76E"),d("1yTXPVydNmWA29d1MAoa2qkGVgcGWEIyA"),d("1zv-oZ-0gQRi6BGaGXBGEBo4fw_UA1hyr"),d("19-k9GN4fRLYzXJQBbzyn1t7WbaQSt8Ku"),d("1cd7Y-GNpgHDxqBkdZ33fKSEGpOfQz4qj"),d("1qQxCiPvuGqJHikwlWVvT3bKHXNBhq4rP"),d("1A7SUti7PsXOa8-1R8vnY2w-xqSwookIb"),d("1kLzG519W5eTJX_ZdS0HOtEgWsQIqUq71"),d("1o3VZWqs3iudT92TtkPhg8M7ej8amt_6D"),d("1ShwjAe3rYE8Ykty9H4lojMjky8sU11CO"),d("1E9R-6q7GNsK0j-hHZGjpy_ooCB1YrKna")],
    polaroids: [], height: "1,92m", bust: "98cm", waist: "78cm", hips: "95cm",
    shoes: "44/45", shirts: "M", pants: "32/34",
    eyes: "Dark Brown", hair: "Dark Brown", nationality: "Brasileiro", age: 23,
    instagram: "https://www.instagram.com/tezezico/",
    portfolio: "https://drive.google.com/drive/folders/1JIOUE9n3oZ6JsoVFmOPbukSN9HWDHT9r",
  },
  {
    id: "17", slug: "nanda-peixoto", name: "Nanda Peixoto", category: "feminino",
    coverImage: d("1rmNK_EQyxWDCtr0_01-3o6YyzOBX50tJ"),
    images: [d("1rmNK_EQyxWDCtr0_01-3o6YyzOBX50tJ"),d("1S2d3Yr79GX02DRo2wHcskMKCFp060LRJ"),d("1T7lokmC6L1hM-MxP4tUjZhPHQ0yMLGTj"),d("1hIlodbRPuXOFVGi3nZg--hxQu75FIYOb"),d("1DyIGfN3hrUNp_G1M3S4SDDoQqOPgS7rX"),d("1tOL_B5fSeBcc8TruSKvCQDMvMpgJncez"),d("16V3o6dEkfAdCfpL_FPw3_p5cl0GNf7Y7"),d("1gba4MfH6pEqiaqT3lq2cslpfj3VyljFU"),d("1ZfQZFEhl7lBu3wsAg6ZIUcZcuPhc1Fpx"),d("1ma_pVvhJPi1u3-jFihEYI8NsFIgshTw3"),d("1CmpRIeMRad15MbYgm5qFhUWySX8Vihx4"),d("1pc4DOfRBxWlYnVQC6jWxXJs9rY1qLSAx"),d("1eqOrhQQi5oCxoeFsFR8aVvbBcAoX5rvu")],
    polaroids: [], height: "1,74m", bust: "79cm", waist: "62cm", hips: "92cm", shoes: "37", eyes: "Castanhos", hair: "Preto", nationality: "Brasileira", age: 20,
  },
  {
    id: "11", slug: "renata-jamilly", name: "Renata Jamilly", category: "feminino",
    coverImage: d("1yAyjIXnrIMQxL7HfU1XpxlTfwANVE0o4"),
    images: [d("1yAyjIXnrIMQxL7HfU1XpxlTfwANVE0o4"),d("1ADSpnIkW3naEiCPRIgSKQ1ZunroVS-Yl"),d("1ZiKDGKAg5DBTQ3eMSBxeQcpYXrbSSkzc"),d("1aWWEDX2_3wpcM8zfctSWoBHNCI0xWOwH"),d("1YV0CF66emR_6j_DKsUhVNEc0omxDi6Ks"),d("1yPLov7L_YYSv9xBUXK2yhXp9WjRWTbaS"),d("1IjF-yWGq0d76GmMejqEF5hU9W0KDcIKq"),d("1KGIMdLHSDiGx8bGSn7vaSTYRnWqfQwdJ"),d("11KGijYBgOjnbGL7yJujmEzxCvqAhCJiZ"),d("1in_QS0dHNHN7dwfA9G_Gu6l_BgW6wjk6"),d("1s4aC-MrkmwwifSnOpwCgJgCfEshML2pN"),d("1246l1R_94jVekL2Oz9wAZq-hbOQGH60n"),d("1KH5rND8W3XzHzGAfKWDlOUY9-fYwJPkw"),d("16KQGVPV3mcn_PTQWUDKUALV7F6Ia3G_F"),d("1S9cRplvv9gQBRWzpWa6u61axO70MC6ov"),d("1iEw8JiJGnekLWB5j3dA0okSWSx0TXHP7"),d("1BMleWsd4lmvp_JpdqbUOQ3HxLWUNG_wd"),d("1oR5gmhIA3Va6V7z_v00pDnffYrxDSwOQ")],
    polaroids: [], height: "1,75m", bust: "77cm", waist: "62cm", hips: "89cm", shoes: "38", eyes: "Castanhos", hair: "Preto", nationality: "Brasileira", age: 22, featured: true,
  },
  {
    id: "1", slug: "richard-carbonari", name: "Richard Carbonari", category: "masculino",
    coverImage: d("1q7hHDCT8YGPwi9vXp4lbhEFCodOeDVsP"),
    images: [d("1q7hHDCT8YGPwi9vXp4lbhEFCodOeDVsP"),d("1n53U9Ghm-fAbRkJJQBJ3A9qtRfcWo1VH"),d("1ACfvobQNpC6RVIJxEwidgl_k7wwMd9rN"),d("146Xt8WI1qxhgt0XC6MApJilSUDqt-G3f"),d("1z1TBsK4kNf4uX8gxRSBYnB2pr31CFbao"),d("1rgyTDm-0SDfP544o9NzesEfTc-CtJ-TD"),d("1y9-saC186SAEDOxK3wRa2pdeqWRPMiRG"),d("1Aa5whm4_0xD16N-RneaxZmAapM-uiLl5"),d("1QmQ3PcdVoGUWJvxaL75XiEOTzR5x_Gbh"),d("1CbMo2hC_sJFYevqgMZF57qJ0DchbkwKd"),d("15iJijOJOKUWGyRmS3KrO18lLod1vn0Aj"),d("1rJ4FtoEqE2BzdaqAZlolZroL4SqfC-9M"),d("1SEiBV4H1CtrztUIAs2L7BwsbH_PrbM5h"),d("1J4Js9J9BAlQ74N8DYnS1FNz0NFh_bIBF"),d("1QYJ-uu77Bo5eriVO9712si4v8cNQ7_en")],
    polaroids: [], height: "1,83m", bust: "98cm", waist: "78cm", hips: "96cm", shoes: "43", eyes: "Castanhos", hair: "Castanho", nationality: "Brasileiro", age: 25, featured: true,
  },
  {
    id: "13", slug: "samira-leopoldino", name: "Samira Leopoldino", category: "feminino",
    coverImage: d("128REp4tgzfvybAtAszt9dQpunGKTZvEx"),
    images: [d("128REp4tgzfvybAtAszt9dQpunGKTZvEx"),d("1-YjnUDgfoiInHuYxfVUPsrdFk8dhqKl-"),d("1tIex6xQsSoz3nht8b0L1ba3w-2C5qsV3"),d("1MrnwZDlJXi_8A49XPnmCKqAz6VEDxy5E"),d("1I1PHO2LgzRAtjMMd6YIWvbEd5VvC6v-G"),d("1_lOL9kTqEtnuPh6YnfbnS4KDCR3bfhI2")],
    polaroids: [], height: "1,77m", bust: "86cm", waist: "65cm", hips: "96cm", shoes: "37", eyes: "Castanhos", hair: "Preto", nationality: "Brasileira", age: 19,
  },
  {
    id: "6", slug: "wagner-piazzoh", name: "Wagner Piazzoh", category: "masculino",
    coverImage: d("1xcfkrcUkZKNXXdW20WEyqD4eGM9GVLK6"),
    images: [d("1xcfkrcUkZKNXXdW20WEyqD4eGM9GVLK6"),d("1hzpPlUUfrWNasMYqGHsuT4MyliNY1BnO"),d("1dwagOoslkufMBxVv67-VFuBgGrGxDwha"),d("1pDSb-fXjjgXJD9iY7Tu6tTlvVhtLh3pJ"),d("10mdUdbNqDgo3VdhTtTY6UXcE6gq_mIXe"),d("1IR0MEhNLIaR6b05UNlDrFevs-VMG9CqX"),d("1QJCx-dQfXAnQQM1bTvHrxUIMtfNf3439"),d("1xIoTkhlaskrw7R3oXhhUxmiZK6fSGsOs"),d("1d6w9WnkQ64j0WS0Oic0Qf5JUWUxb2cRO"),d("1u2NfLAbBL0X-HAoWbGMv8YBwQ0wipD-7"),d("1ivl9tuAwMhAeuuZjNW8lTCNZuluyGfhR"),d("1_vxHw8PTaz5KPpChtjDv9dOid3TCqU5a")],
    polaroids: [], height: "1,88m", bust: "85cm", waist: "64cm", hips: "87cm", shoes: "43", eyes: "Castanhos", hair: "Castanho", nationality: "Brasileiro", age: 24,
  },
  {
    id: "18", slug: "stevie-jones", name: "Stevie Jones", category: "masculino",
    coverImage: "https://lh3.googleusercontent.com/d/10OS-AKtwvsVEq8RKWCLXG_pM4hw3zfZk",
    images: ["https://lh3.googleusercontent.com/d/10OS-AKtwvsVEq8RKWCLXG_pM4hw3zfZk","https://lh3.googleusercontent.com/d/11M1YTZJUqQWhkXeaw_x_V-vteYDBLy8d","https://lh3.googleusercontent.com/d/12eneG_5t0Z8K9V9-W77J8vCJMp-FXDwk","https://lh3.googleusercontent.com/d/14UKd7lDPbTGgVV3jrUjQTrId7m1KLeim","https://lh3.googleusercontent.com/d/1AstMXBWamwp9qmtt-f7sKbQo4q7ZQMix","https://lh3.googleusercontent.com/d/1Ctz7jvxuCX0P6vMywxFU-u6CajTxLRrW","https://lh3.googleusercontent.com/d/1FR7niwshMT7gTTSKWhBdCAOujUKB6Q1T","https://lh3.googleusercontent.com/d/1G37wqZHsSB5kemNJH_BrssPpyp-PYCG8","https://lh3.googleusercontent.com/d/1MBs1mig9Oiyn2toHEZCKciZp7Ba7hc7K","https://lh3.googleusercontent.com/d/1MrYkR0y_XrNsoGBYanfKwSqaMoO--HJt","https://lh3.googleusercontent.com/d/1S6ExwxzgHf09A3hyWjgOxhT_NkkQn3uS","https://lh3.googleusercontent.com/d/1TY_XT0o0KzV5TakZiW5YxcKaDX5xcYaV","https://lh3.googleusercontent.com/d/1Zvztz-wXt1peOpQJnm7lf7xl8t7fI0jR","https://lh3.googleusercontent.com/d/1_23oOgRttOfhQ2ykpQQTQ5b30oZAK4FW","https://lh3.googleusercontent.com/d/1bcNmgIORij3lTjaoPljizpLVgc40SIGd","https://lh3.googleusercontent.com/d/1gLm9u3pOuVvErNQY_-MW_CcCVAa9pMjM","https://lh3.googleusercontent.com/d/1jUowa95YdZDevQytoybwSJizk3sB-7ty","https://lh3.googleusercontent.com/d/1lPhVDTyrT-AA4zD5n9-nv0-_AtpMD8iQ","https://lh3.googleusercontent.com/d/1nrUfBSh_aHhxWA_RLsqvX8Zr-rUjsswd","https://lh3.googleusercontent.com/d/1o47odPYijVZjz8qaavbwKYivV9d98frM","https://lh3.googleusercontent.com/d/1qH92Uh_q8OXA8MetZMJRP-FXuhPdX6Ix"],
    polaroids: [], height: "", waist: "", shoes: "", eyes: "", hair: "", nationality: "",
  },
  {
    id: "19", slug: "fernando-nascimento", name: "Fernando Nascimento", category: "masculino",
    coverImage: "https://lh3.googleusercontent.com/d/148yWUmp-09eICHs-K2RdQSoULCOE6t3E",
    images: ["https://lh3.googleusercontent.com/d/148yWUmp-09eICHs-K2RdQSoULCOE6t3E","https://lh3.googleusercontent.com/d/15FnUWiUjZREImn010OWFjgx2LP1LaP5r","https://lh3.googleusercontent.com/d/16IqaSgUJuPAe2HHmTuAJYB4vLqJjDa6y","https://lh3.googleusercontent.com/d/1BBABNo-n2OnxYuMGtYvmLOrYCYpGyuXE","https://lh3.googleusercontent.com/d/1DI2Vj7zT8WRe5Qh2b6ApxfcPG1pXEn9G","https://lh3.googleusercontent.com/d/1ZgxQIhW0cOTZaubCoTGodfdXMwt8SXGA","https://lh3.googleusercontent.com/d/1bUtYRWQcf5xoq5qy45AAglGuj0y8QLo7","https://lh3.googleusercontent.com/d/1dTk6saiTXNJCU8y5uAkZ22nAu1kEV5u7","https://lh3.googleusercontent.com/d/1h2j3AJe62-A_HehA8GWt6MUr6YxVIHVt","https://lh3.googleusercontent.com/d/1pyJWk_eEbwi_Wf8W3aH8nUEbcjVozpfM","https://lh3.googleusercontent.com/d/1qMfiSFpBaDGBGrWD37LK296GKb_EDvdV","https://lh3.googleusercontent.com/d/1rJ38ChPfMW66tzKQlVAQCZM8ZxDvsIMY","https://lh3.googleusercontent.com/d/1ruMN-zuQYor8_UjWdh85nIGmMaPudOCv"],
    polaroids: [], height: "", waist: "", shoes: "", eyes: "", hair: "", nationality: "",
  },
  {
    id: "20", slug: "jhonny", name: "Jhonny", category: "masculino",
    coverImage: "https://lh3.googleusercontent.com/d/1-XZZcbvxUagm5VuwxNjrjOH664WisKEt",
    images: ["https://lh3.googleusercontent.com/d/1-XZZcbvxUagm5VuwxNjrjOH664WisKEt","https://lh3.googleusercontent.com/d/1-yA8NRrVSpk6cYZmAFAlFmNhWwUQ1rok","https://lh3.googleusercontent.com/d/1-zb7MbSqGnkPbuyXmAXsmVX4pK_GmuP_","https://lh3.googleusercontent.com/d/11aJF49VShNPu2rjKMmIANHED4HWn0z-G","https://lh3.googleusercontent.com/d/14-bOxfhv6JX7fHInjNBKGpQxdeAE1A30","https://lh3.googleusercontent.com/d/16Qq5qhQtZNeB4Ms4kNphmoSA-8jbQ5GQ","https://lh3.googleusercontent.com/d/16fCgfihQELVECmdzg3eQT41CandYZoML","https://lh3.googleusercontent.com/d/184iQyh6o5u4kfpmOWe7fF_iR0qlBImPY","https://lh3.googleusercontent.com/d/1DLYCvt96VUiosJj2qis2kHVsUFdFG3Eh","https://lh3.googleusercontent.com/d/1EOrm1ea5qEGp0MympIWsd1lSk4nt6os0","https://lh3.googleusercontent.com/d/1SI8dVX7dKM5GuvTZW8YIbNfcygJ2vqH5","https://lh3.googleusercontent.com/d/1X11gbuPD9v5rEuhaEOBY5kTI65My3aHT","https://lh3.googleusercontent.com/d/1X1qi90Mgi0C-NkTHDtcZO10d9n6j7N_X","https://lh3.googleusercontent.com/d/1Ymg29xavDOb_oAD90M7DDXEi7U6ISWUa","https://lh3.googleusercontent.com/d/1bjb7LBXcaPzdLU3ZfaaRtYQQvOgdG9EI","https://lh3.googleusercontent.com/d/1dHM5lg8FNn8Olr0Ej3aef2IjPgnfVamB","https://lh3.googleusercontent.com/d/1e33RH5R_LD8uMIm7DSCKj5BUSaxykzKq","https://lh3.googleusercontent.com/d/1imSC7vRp9Ur9184BagVyJ6XbKDCaZEob","https://lh3.googleusercontent.com/d/1jjK-Ql0yaQnWUNoo0VvQn-TCF855h8id","https://lh3.googleusercontent.com/d/1lmPoObgFTnb3zvCf7IeObtGBxxJkZCv6","https://lh3.googleusercontent.com/d/1r2Lcr0W5s-_iJZmyr_5uMKMS7hdG8mP7","https://lh3.googleusercontent.com/d/1r5S-_3rJmiXvP0XwDF9iQKN0QtYcFryc","https://lh3.googleusercontent.com/d/1rJjQ0szKVRSzzxJskU3NvMtQZseoPmTv","https://lh3.googleusercontent.com/d/1uAWrm86wfy_ylFAvmkpT-vitvCeORMuH","https://lh3.googleusercontent.com/d/1vuVP_awESlH963XgZjGhWIQz6DRhVF34","https://lh3.googleusercontent.com/d/1x3Z4mYxuhXNHz_wI24zDK4G52UiZGkPt","https://lh3.googleusercontent.com/d/1yX0jFInRMbGYeNFFqyf_T6Gt7h9_vDew"],
    polaroids: [], height: "", waist: "", shoes: "", eyes: "", hair: "", nationality: "",
  },
  {
    id: "21", slug: "helena-weber", name: "Helena Weber", category: "feminino",
    coverImage: "https://lh3.googleusercontent.com/d/10SKW64UkXddGuqwR6MmHgFkC3v0rCJMq",
    images: ["https://lh3.googleusercontent.com/d/10SKW64UkXddGuqwR6MmHgFkC3v0rCJMq","https://lh3.googleusercontent.com/d/16oyie682lnzngr5VYo-_szjqvlfrfcer","https://lh3.googleusercontent.com/d/18RGAoC_Wn0wSGR_ZP_Fw43b6i3M6QcUe","https://lh3.googleusercontent.com/d/19363eoRX3foPMzoVALUa1KKnUEZlbmcp","https://lh3.googleusercontent.com/d/1D9KquxxP2iEjglsKe39p0a7OXEfchjT7","https://lh3.googleusercontent.com/d/1E-UO9Ayh6ew9tfmVwN-oQwsOR62CMcrd","https://lh3.googleusercontent.com/d/1ENa_tL_KFggJDktZ70HHH6LbiBeY24vk","https://lh3.googleusercontent.com/d/1KS6rHRZePk5FLq6X5sztBr3ADSceI6Xu","https://lh3.googleusercontent.com/d/1RESuQaiqdUazut8HdivQ4-ksmm9dmKrx","https://lh3.googleusercontent.com/d/1SXOx7vPX-KONsyjsCex4iy9zihP01RZ0","https://lh3.googleusercontent.com/d/1Y8RPxk2ElVPj0fyp3vipnbV85LhfS_tB","https://lh3.googleusercontent.com/d/1_E3Svi2-NR8IZ-0dUDv9ldGIsLmzbVh8","https://lh3.googleusercontent.com/d/1a78oH1pop0GSvZhlnWrWIdTBgZKEE3Ir","https://lh3.googleusercontent.com/d/1dOVtMAf5oVWOXir4Lps_bU5lutoiDMqQ","https://lh3.googleusercontent.com/d/1gbEHjjpSNe1wSLDkI3XYtb821Py6Moyz","https://lh3.googleusercontent.com/d/1iQKTBdYUgu66PZ236POMUAbQK60mQWnf","https://lh3.googleusercontent.com/d/1jOaOKLXiWY85JyMRRoQP9GS-vPIxeHtX","https://lh3.googleusercontent.com/d/1l2SiPt635rKeYrsCW1UVMebzv7xDFATC","https://lh3.googleusercontent.com/d/1tQUjQG3937mnQFAXWW7f-vcH5c7XrbLG","https://lh3.googleusercontent.com/d/1vn_aHFgB-1kuiT5U0mPO6EJnz5rQxOGl","https://lh3.googleusercontent.com/d/1wE9t7wfNbuJcMwL2bxI7RPDiJ6GMJXcN","https://lh3.googleusercontent.com/d/1wUVUiyDSOrik6pmYlgeET1tmLgyWwK96","https://lh3.googleusercontent.com/d/1xFd3ZwC6WpSBCRC1g2da1_XED1eTnwm5"],
    polaroids: [], height: "", waist: "", shoes: "", eyes: "", hair: "", nationality: "",
  },
  {
    id: "22", slug: "florencia", name: "Florencia", category: "feminino",
    coverImage: "https://lh3.googleusercontent.com/d/119aclghOTCjx5pdwD1cfg-XzZbfaeniH",
    images: ["https://lh3.googleusercontent.com/d/119aclghOTCjx5pdwD1cfg-XzZbfaeniH","https://lh3.googleusercontent.com/d/12j-PNGBmEoTX7Q2LlAUnB4N5fd6P_ZIz","https://lh3.googleusercontent.com/d/13VvDYnWxRiAA8b-677CdbiBHK7VDa56W","https://lh3.googleusercontent.com/d/13ZJkR31OrBGrJnbtKmWF36Zip_bjP2lA","https://lh3.googleusercontent.com/d/15KKGFgOt1U6BdI_On__-cH3dgTMVgS-b","https://lh3.googleusercontent.com/d/17d_66RFqvA3Y5tXvBYUdrXKHfMiFG57y","https://lh3.googleusercontent.com/d/19bgeNVg8c1k8nn7A8LgcJ8YC84cRQgie","https://lh3.googleusercontent.com/d/1AuaX_gnlR1OgTeHzJr5DMBRkq_MhPD9u","https://lh3.googleusercontent.com/d/1C0rvzn5W-DMA8XNjcdZSJDdV4eOrptK5","https://lh3.googleusercontent.com/d/1DPaYr0zO_TEI9s8tvbGpGxewmxwQKsYW","https://lh3.googleusercontent.com/d/1DWnaGpSkpZ57DqoCytPPxKNdUtp2RJI5","https://lh3.googleusercontent.com/d/1GOwIoPj1YV0QoNXtxAI5FNupQCvO5IFa","https://lh3.googleusercontent.com/d/1GugCm990xPH1VChZuRstRmDZpKDRZvg3","https://lh3.googleusercontent.com/d/1KD7KDkGvORvLkazOFQPMjIFeD7NcePue","https://lh3.googleusercontent.com/d/1L8fqn1IgZD1wUdXqkVumMhMvcPih90tD","https://lh3.googleusercontent.com/d/1OMNZUdPksTi3R_BmjIvqSTdNuGcrmkfB","https://lh3.googleusercontent.com/d/1P9ycBRmpsmsoDsL5E3d-J5OPt-HzarrF","https://lh3.googleusercontent.com/d/1RSfdU6c2gVQZp8nydcWq2onHzGVBbCfk","https://lh3.googleusercontent.com/d/1RYMJXc2vQh4OgGs5dsSDhUnlViZVoVAQ","https://lh3.googleusercontent.com/d/1RqCmAy-TqE8cm90g2el9HeEddtH620ay","https://lh3.googleusercontent.com/d/1Syb4DZeP7QioIGB_q-DTK5Da7f20SBVO","https://lh3.googleusercontent.com/d/1U-oqR6Z5UOiWejO3DxqOWghd1rnSZsoS","https://lh3.googleusercontent.com/d/1UdqB1fP2-PzQuBCCPaCpthpGrIaOKnSW","https://lh3.googleusercontent.com/d/1UqMLYOKbI1Dlxh_KURuC0nrzhQlDSj9K","https://lh3.googleusercontent.com/d/1VV5h5a7hmRAcMoFc9TkgD7S5AaJvULNN","https://lh3.googleusercontent.com/d/1XDCuahE24kln13xpuRcBBUUUWtqW9xIA","https://lh3.googleusercontent.com/d/1_ePJDxf4eBIAhp6i_mhNuHPbVqh6TsH9","https://lh3.googleusercontent.com/d/1cBzjoIANIX5z1xj-fwEPmsRY3JKV6tP2","https://lh3.googleusercontent.com/d/1f0qTW7mlxLbVQXiZ9Z9U9LjlxzQ9fo7F","https://lh3.googleusercontent.com/d/1lN4r_1H5_ePsn8BQkKZZYgiuOKhTBTWp","https://lh3.googleusercontent.com/d/1mMVFKUkAsdGefthbUwU9aLydzKlR_s59","https://lh3.googleusercontent.com/d/1oBNl-2Cn-yV4Mk1da5k7DjQNpwKbxoBG","https://lh3.googleusercontent.com/d/1oGlxZJRPT7E9zdsmMkg5-QkFq8kE30Vg","https://lh3.googleusercontent.com/d/1p0qYb8l582asD1TJ8KKlXDCTKu-YUuty","https://lh3.googleusercontent.com/d/1pGN2pL9p3umUrXJzmvsTfyGEby0SBrFL","https://lh3.googleusercontent.com/d/1r7cZCJXxwhY6I34ZZ-ENhKYHO-hIhmQ_","https://lh3.googleusercontent.com/d/1sPTr_72bZq-IxP3X7U8h6YNgX2jgdUgX","https://lh3.googleusercontent.com/d/1t9kAQHdK41sEWASTzfhWz97lRZWpTdGw","https://lh3.googleusercontent.com/d/1tMecfJyKwPSqtngAioPQELdGhz8PZT4D","https://lh3.googleusercontent.com/d/1xdcr2qIsPLIj1XYbCJtVrIoBLLbDnzDb","https://lh3.googleusercontent.com/d/1yP10Pc58LCzmbBXeHH_zzoTgXogZb9Nm","https://lh3.googleusercontent.com/d/1yQSKRJmxf3VsdWZ7FcqFNBYasDBHf13f","https://lh3.googleusercontent.com/d/1zzxJVll07YcTmbbGsgHEEmFFqlRSq4Sl"],
    polaroids: [], height: "", waist: "", shoes: "", eyes: "", hair: "", nationality: "",
  },
  {
    id: "23", slug: "yasmim-matos", name: "Yasmim Matos", category: "feminino",
    coverImage: "https://lh3.googleusercontent.com/d/10CxmJyocCoDX8DJErMGiXhVe63kCsR9K",
    images: ["https://lh3.googleusercontent.com/d/10CxmJyocCoDX8DJErMGiXhVe63kCsR9K","https://lh3.googleusercontent.com/d/10r1UAvET34lQU2G_8m13VDr3DN47A44T","https://lh3.googleusercontent.com/d/11TI_V56WxzKMKH9aDCLhH6HMbMwdzVwo","https://lh3.googleusercontent.com/d/13jaGQbzx3JQzhJ1JOeqU5E9WxcTmJtdD","https://lh3.googleusercontent.com/d/15GyYuVc3XIc-G6jvpHEtHqz18ZVt3gsf","https://lh3.googleusercontent.com/d/17KwiZb9_NttggEcC01mCV_JSz_XmsCD4","https://lh3.googleusercontent.com/d/18l3QaxXrvN9UxPJxnMepI6za5YFm6dYf","https://lh3.googleusercontent.com/d/19MJNBfG6pwPjHbZOiwHkJH_Iuza9AUSX","https://lh3.googleusercontent.com/d/19VuacpbnkeCtkzIuY7QHs_DJoVA5e95V","https://lh3.googleusercontent.com/d/19b68f5-POpOgdFeE3HbDdYMXK-RJult1","https://lh3.googleusercontent.com/d/1A7W-f0rlGiYgAhB3hcWE_zok6kItBIFG","https://lh3.googleusercontent.com/d/1ALrUan-KliQOn6nlj2xUYRtn27OxB3Id","https://lh3.googleusercontent.com/d/1C8IQgXUHcG2TZMC87KCVlBDiNm1Ffxqb","https://lh3.googleusercontent.com/d/1D5K1qaoygeKIQZfEchAsIROYb--OgbPq","https://lh3.googleusercontent.com/d/1DkS-FBJU1WQnQJgiEfIn5JCud4pPSsQ6","https://lh3.googleusercontent.com/d/1FRcqF7JVw27v-ggUcTDSyJn5CdAiLIcE","https://lh3.googleusercontent.com/d/1HdD4WI4DOvhGZgxc3O5YTi0bfeEQpUI_","https://lh3.googleusercontent.com/d/1HzTXFgfv8Wr1-MKPfmUUzKepvjwGs6LP","https://lh3.googleusercontent.com/d/1JjIyC50Qwh8lnJZVQfTEXjLJFz7ccLwh","https://lh3.googleusercontent.com/d/1LQTmT5MwqF15hVQrbfmlWAkJaMBDSVOY","https://lh3.googleusercontent.com/d/1Nwq7VJ2z6FHS5_2plV78JlcMUTAB2Y6K","https://lh3.googleusercontent.com/d/1PjevlfjNUr6_8fzaIpCP7oPpyB9jIqzT","https://lh3.googleusercontent.com/d/1QAVh7-8aob3fAm8PiDPBgesVU8tNDcIM","https://lh3.googleusercontent.com/d/1SiCCIpUPfQEwew083SrembtZzfns-7Aq","https://lh3.googleusercontent.com/d/1T17YeRI8z6N9ilBAWC-GzUy17fW8LnVZ","https://lh3.googleusercontent.com/d/1WFx6xqKBMzYltFD6Taj-WlEmmMwgYjrz","https://lh3.googleusercontent.com/d/1WaB6YN4ASgVeAnIuOMm3wZLPoSi61riS","https://lh3.googleusercontent.com/d/1WohHnq3GtXBh1_Azq8Tit-w2m-n3YwyL","https://lh3.googleusercontent.com/d/1WpoSozMgT2bK6QA0bp4NerO1sxToDoI8","https://lh3.googleusercontent.com/d/1YDmDsXMNaCipWhOYAbrUKkuq4JNT1Ub7","https://lh3.googleusercontent.com/d/1alW6LDeDNhBywCIjeANV-Z3ZhFmyAElc","https://lh3.googleusercontent.com/d/1cCKJK33f9ItkhdbA1h5j_ABly1QWRna0","https://lh3.googleusercontent.com/d/1dPdHOc1YgxEQf0JX-qoCMVtTgxyopp-T","https://lh3.googleusercontent.com/d/1eULErI2E5ZvYEIrPsKXLVocc0HCt1dpW","https://lh3.googleusercontent.com/d/1gS1NOrreuwnEhUrk4lDNmso2gvLmJyc5","https://lh3.googleusercontent.com/d/1j3ZLWqOu5DcQ9xWR4Pe45VRTUIuu-qz2","https://lh3.googleusercontent.com/d/1jK9eBmxku6NJ34UVDWdlfL_p77pN7n11","https://lh3.googleusercontent.com/d/1kAfV4YmOWapo9Jgus3is9bXlqafNfi3u","https://lh3.googleusercontent.com/d/1k_HB80qZ9FvQDJ7NlAfltQvuGixNwD31","https://lh3.googleusercontent.com/d/1kaOmX1AtXTpunK0va9cMwREMtPKLgz-H","https://lh3.googleusercontent.com/d/1ld5hyS9NCIIffQs7-UthcE2u7tcykSAe","https://lh3.googleusercontent.com/d/1mD5t6oVVd3H--nA6aBO2CWXRaU9Bam7S","https://lh3.googleusercontent.com/d/1nt3EzLiCoe9gyfNEieLnRzJP66pu1Ers","https://lh3.googleusercontent.com/d/1pe9c_jx6ETcx4SdNWc-PjXde7Upx3FiQ","https://lh3.googleusercontent.com/d/1pkbJ9SUfwCJsrN9AIU8FADl-7JDbfwJM","https://lh3.googleusercontent.com/d/1qEMPQ7zMBvvqAdXoODsEI4zev8hAFFd6","https://lh3.googleusercontent.com/d/1qIyXeZbJkRIc-RIEa1CM0bxnaKviQT2d","https://lh3.googleusercontent.com/d/1uNY67Q9F528AZtPj_Qw31mw2UKUrqKtT","https://lh3.googleusercontent.com/d/1v7kUK5a_SflaTr9H4KPwQKSHm2LDXihh","https://lh3.googleusercontent.com/d/1w9VcS4CO6NGohR9ZgCytSbJmAnUCwdPj","https://lh3.googleusercontent.com/d/1y2aEmwLO_AbuY3bUQZMdwHWDDIBAQc0t","https://lh3.googleusercontent.com/d/1y8Y95sYdFfmsAypLdZa48l1Gsap8c4cI","https://lh3.googleusercontent.com/d/1ysRyYUdUrNTzcNRHXO9GIQXkJPr6NBKL"],
    polaroids: [], height: "1,75m", bust: "80cm", waist: "61cm", hips: "89cm",
    shoes: "39 EUR", shirts: "PP", pants: "38",
    eyes: "Dark Brown", hair: "Dark Brown", nationality: "Brasileira",
    instagram: "https://www.instagram.com/yaas.matos_/",
    portfolio: "https://drive.google.com/drive/folders/1mKyXJbIdDzDtdlI1XVUrisEnrphJoLyu",
  },
];

export const getFeaturedModels = () => models.filter((m) => m.featured);
export const getModelBySlug = (slug: string) => models.find((m) => m.slug === slug);
export const getModelsByCategory = (cat: ModelCategory) => models.filter((m) => m.category === cat);
