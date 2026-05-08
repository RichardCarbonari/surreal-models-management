export type ModelCategory = "feminino" | "masculino" | "desenvolvimento";

export interface Model {
  id: string;
  slug: string;
  name: string;
  category: ModelCategory;
  coverImage: string;
  images: string[];
  polaroids: string[];
  height?: string;
  bust?: string;
  waist?: string;
  hips?: string;
  shoes?: string;
  eyes?: string;
  hair?: string;
  nationality?: string;
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
    coverImage: d("1q0zVdrBwEuu3yWQKy4wSChec-ZnhxtRz"),
    images: [d("1HQ2YJfRP9Uymgp3qVYuJgq2kU7isH-TO"),d("1PBAiivYOdzh9QYJ08EDqBAUzzIl2-X5m"),d("1SI4NDTVgsD8TiDivWmOgMHJy1PECFsst"),d("17dAaERquRclF9Zg9z8OC7SWjsKSHoUD7"),d("1TYcnj_JsL7olMqL3OMRrePXCq3GD7_5k"),d("1q0zVdrBwEuu3yWQKy4wSChec-ZnhxtRz"),d("12l3ZBp8LvVcTNkgAJbhp9SQNSwL4FTGe"),d("1PfIY3i4VrmLyCfHtdRt19hmp95NRaT4n"),d("1JxAARtnAz56Uavjiih6nKQA3cgAn7Pfk"),d("17xZgoXLONNXi4Ch1LzMRjBIWlytQnjrN"),d("1ANBo1_JT3ZjJRYRiUGcrtfThcHd1ghrN"),d("1AOUlxBxDMDYF6LbZHnlywTB8SZnVJiEg")],
    polaroids: [], height: "1,86m", bust: "90cm", waist: "75cm", hips: "88cm", shoes: "42", eyes: "Verdes", hair: "Castanho", nationality: "Brasileiro", featured: true,
  },
  {
    id: "10", slug: "clara-albuquerque", name: "Clara Albuquerque", category: "feminino",
    coverImage: d("1GSfhVilmxnvpu7fkqtGQKNwSwWWuC4DF"),
    images: [d("1YX1Cb7rZgvFksrO4zhvCq_IDmJ1hn0uJ"),d("1mvb1PuXbFMxZPmaCUv1T2Td0kbz0Qwd_"),d("1fCgnE9W-kjMBtuOvM8k2OGlazd3yWByY"),d("1gcbm56ispFFFmkQmLlid1NbJjM_NbXQw"),d("1erBiKRO45zn5HRlc7qfSFNDGyIMEr3JS"),d("1078nkZvNagrwrYRag7whs6f1oxB-EJP4"),d("1BLMzQCn20sFpwzfQMYacVL-YQ2zkqWot"),d("18cVpaBZ5kmw5CGMSoyFP9zrLtSpslilk"),d("1n8LIjoHpyLTI6KXL2U79BVSRImWobq-6"),d("1T3BZ_bzC2mncDLP9zVx0qi8f8k-wvPt1"),d("1X85m4srtMKfdrpeLspfVP4Tixb9jeTRP"),d("1-zysPf02YBDBwXeNc_DMjLwsWtxL6tdp"),d("1bsLsQae8c3je293L_Wzpy5uCVX5_1nq4"),d("1nkS1ZY3cjPOlQ9fPZhy_pd5F1rjeW7O5"),d("1qUJpq7kaO5fDqZQNQkmSfepJEJ_aP56V"),d("1KxdVCn0iURp66h2sJqTKst7z1Hnblj61"),d("1eY1lEIC8YzckLYGoZbNk8Nd1fKdoN52o")],
    polaroids: [], height: "175cm", bust: "78cm", waist: "62cm", hips: "89cm",
    shoes: "40", shirts: "XS", pants: "30",
    eyes: "Dark Brown", hair: "Black", nationality: "Brasileira", instagram: "https://www.instagram.com/imclaraalbuquerque/",
    portfolio: "https://drive.google.com/drive/folders/1v-kN7Zq9g8-CmBaqzrc6KGNWWeyTWoJu",
    featured: true,
  },
  {
    id: "4", slug: "emad", name: "Emad", category: "masculino",
    coverImage: d("1QaOhJ2qiBnDNfVGGlaxAsMx16xlz2ZmQ"),
    images: [d("1A_cyOQj7z42k0ysC1Tr-n_XW5RUF4YrK"),d("1JnP7W0DHeBUeR4jTUBwpeKOEROd6XHJn"),d("1QaOhJ2qiBnDNfVGGlaxAsMx16xlz2ZmQ"),d("1JlCy41O0UkCjahGq4p-GHOnriUPzSJ4K"),d("1GKijZ-fIaSJpiGzPQHxmPMoElamnp6Px"),d("1tLdgLceF4mmbVPGJWIvan1k1oRmkdGB7"),d("1dP5jUjwU7uGenYlOtZ_fGjgUO0kTSEOu"),d("1PV2mfCDs7bm1Rdb9UAzP0gxL4C--Daxb"),d("19K0pY6MF1o_1e6IzKDvV8mfbbt9ITvmM"),d("1Qz_5PRileimilBO17co1S8nLpVxAEfQ-"),d("1jzvVxzWwnwGfuODcjOOz4eYHBkhEmeER"),d("1tzcV9k8zliTeD3lmNaqjWK6ncrrQapSX"),d("1PkX6UAzMsIM3vdceQ-rtP92gkwghjfcG")],
    polaroids: [], height: "1,85m", bust: "90cm", waist: "75cm", hips: "88cm", shoes: "42", eyes: "Brown", hair: "Black", nationality: "Brasileiro", instagram: "https://www.instagram.com/emad__photography/",
    portfolio: "https://drive.google.com/drive/folders/1q0zVdrBwEuu3yWQKy4wSChec-ZnhxtRz",
  },
  {
    id: "5", slug: "fernando", name: "Fernando", category: "masculino",
    coverImage: d("1q0zVdrBwEuu3yWQKy4wSChec-ZnhxtRz"),
    images: [d("1q0zVdrBwEuu3yWQKy4wSChec-ZnhxtRz"),d("1HQ2YJfRP9Uymgp3qVYuJgq2kU7isH-TO"),d("1PBAiivYOdzh9QYJ08EDqBAUzzIl2-X5m"),d("1SI4NDTVgsD8TiDivWmOgMHJy1PECFsst"),d("17dAaERquRclF9Zg9z8OC7SWjsKSHoUD7"),d("1TYcnj_JsL7olMqL3OMRrePXCq3GD7_5k"),d("12l3ZBp8LvVcTNkgAJbhp9SQNSwL4FTGe"),d("1PfIY3i4VrmLyCfHtdRt19hmp95NRaT4n"),d("1JxAARtnAz56Uavjiih6nKQA3cgAn7Pfk"),d("17xZgoXLONNXi4Ch1LzMRjBIWlytQnjrN"),d("1ANBo1_JT3ZjJRYRiUGcrtfThcHd1ghrN"),d("1AOUlxBxDMDYF6LbZHnlywTB8SZnVJiEg")],
    polaroids: [], height: "1,86m", bust: "90cm", waist: "75cm", hips: "88cm", shoes: "42", eyes: "Verdes", hair: "Castanho", nationality: "Brasileiro", featured: true,
  },
  {
    id: "12", slug: "giovana-peixoto", name: "Giovana Peixoto", category: "feminino",
    coverImage: d("1GSfhVilmxnvpu7fkqtGQKNwSwWWuC4DF"),
    images: [d("1YX1Cb7rZgvFksrO4zhvCq_IDmJ1hn0uJ"),d("1mvb1PuXbFMxZPmaCUv1T2Td0kbz0Qwd_"),d("1fCgnE9W-kjMBtuOvM8k2OGlazd3yWByY"),d("1gcbm56ispFFFmkQmLlid1NbJjM_NbXQw"),d("1erBiKRO45zn5HRlc7qfSFNDGyIMEr3JS"),d("1078nkZvNagrwrYRag7whs6f1oxB-EJP4"),d("1BLMzQCn20sFpwzfQMYacVL-YQ2zkqWot"),d("18cVpaBZ5kmw5CGMSoyFP9zrLtSpslilk"),d("1n8LIjoHpyLTI6KXL2U79BVSRImWobq-6"),d("1T3BZ_bzC2mncDLP9zVx0qi8f8k-wvPt1"),d("1X85m4srtMKfdrpeLspfVP4Tixb9jeTRP"),d("1-zysPf02YBDBwXeNc_DMjLwsWtxL6tdp"),d("1bsLsQae8c3je293L_Wzpy5uCVX5_1nq4"),d("1nkS1ZY3cjPOlQ9fPZhy_pd5F1rjeW7O5"),d("1qUJpq7kaO5fDqZQNQkmSfepJEJ_aP56V"),d("1KxdVCn0iURp66h2sJqTKst7z1Hnblj61"),d("1eY1lEIC8YzckLYGoZbNk8Nd1fKdoN52o")],
    polaroids: [], height: "175cm", bust: "78cm", waist: "62cm", hips: "89cm",
    shoes: "40", shirts: "XS", pants: "30",
    eyes: "Dark Brown", hair: "Black", nationality: "Brasileira", instagram: "https://www.instagram.com/imclaraalbuquerque/",
    portfolio: "https://drive.google.com/drive/folders/1v-kN7Zq9g8-CmBaqzrc6KGNWWeyTWoJu",
    featured: true,
  },
  {
    id: "14", slug: "iza-mazotti", name: "Iza Mazotti", category: "feminino",
    coverImage: d("1GSfhVilmxnvpu7fkqtGQKNwSwWWuC4DF"),
    images: [d("1YX1Cb7rZgvFksrO4zhvCq_IDmJ1hn0uJ"),d("1mvb1PuXbFMxZPmaCUv1T2Td0kbz0Qwd_"),d("1fCgnE9W-kjMBtuOvM8k2OGlazd3yWByY"),d("1gcbm56ispFFFmkQmLlid1NbJjM_NbXQw"),d("1erBiKRO45zn5HRlc7qfSFNDGyIMEr3JS"),d("1078nkZvNagrwrYRag7whs6f1oxB-EJP4"),d("1BLMzQCn20sFpwzfQMYacVL-YQ2zkqWot"),d("18cVpaBZ5kmw5CGMSoyFP9zrLtSpslilk"),d("1n8LIjoHpyLTI6KXL2U79BVSRImWobq-6"),d("1T3BZ_bzC2mncDLP9zVx0qi8f8k-wvPt1"),d("1X85m4srtMKfdrpeLspfVP4Tixb9jeTRP"),d("1-zysPf02YBDBwXeNc_DMjLwsWtxL6tdp"),d("1bsLsQae8c3je293L_Wzpy5uCVX5_1nq4"),d("1nkS1ZY3cjPOlQ9fPZhy_pd5F1rjeW7O5"),d("1qUJpq7kaO5fDqZQNQkmSfepJEJ_aP56V"),d("1KxdVCn0iURp66h2sJqTKst7z1Hnblj61"),d("1eY1lEIC8YzckLYGoZbNk8Nd1fKdoN52o")],
    polaroids: [], height: "175cm", bust: "78cm", waist: "62cm", hips: "89cm",
    shoes: "40", shirts: "XS", pants: "30",
    eyes: "Dark Brown", hair: "Black", nationality: "Brasileira", instagram: "https://www.instagram.com/imclaraalbuquerque/",
    portfolio: "https://drive.google.com/drive/folders/1v-kN7Zq9g8-CmBaqzrc6KGNWWeyTWoJu",
    featured: true,
  },
  {
    id: "9", slug: "nanda", name: "Nanda", category: "feminino",
    coverImage: d("1eqOrhQQi5oCxoeFsFR8aVvbBcAoX5rvu"),
    images: [d("1rmNK_EQyxWDCtr0_01-3o6YyzOBX50tJ"),d("1S2d3Yr79GX02DRo2wHcskMKCFp060LRJ"),d("1T7lokmC6L1hM-MxP4tUjZhPHQ0yMLGTj"),d("1hIlodbRPuXOFVGi3nZg--hxQu75FIYOb"),d("1DyIGfN3hrUNp_G1M3S4SDDoQqOPgS7rX"),d("1tOL_B5fSeBcc8TruSKvCQDMvMpgJncez"),d("16V3o6dEkfAdCfpL_FPw3_p5cl0GNf7Y7"),d("1gba4MfH6pEqiaqT3lq2cslpfj3VyljFU"),d("1ZfQZFEhl7lBu3wsAg6ZIUcZcuPhc1Fpx"),d("1ma_pVvhJPi1u3-jFihEYI8NsFIgshTw3"),d("1CmpRIeMRad15MbYgm5qFhUWySX8Vihx4"),d("1pc4DOfRBxWlYnVQC6jWxXJs9rY1qLSAx"),d("1eqOrhQQi5oCxoeFsFR8aVvbBcAoX5rvu")],
    polaroids: [], height: "174cm", bust: "78cm", waist: "62cm", hips: "90cm",
    shoes: "39", shirts: "XS", pants: "36",
    eyes: "Dark Brown", hair: "Dark Brown", nationality: "Brasileira", instagram: "https://www.instagram.com/nanda__feitosa/",
    portfolio: "https://drive.google.com/drive/folders/1FJWoKd5LRRpSfquNaW17uqvhUvM-t2bH",
  },
  {
    id: "28", slug: "preta-guimaraes", name: "Preta Guimarães", category: "feminino",
    coverImage: d("1_W2HpNZDiqLvusuOPgQBHtnuxArPxyPT"),
    images: [d("1_W2HpNZDiqLvusuOPgQBHtnuxArPxyPT"),d("1-0v6d7ZyvzlKfX9sW7ys7d_zdRbr8naP"),d("13b8otk8l1iBx1Rg-wg_UzMqB5gYldYej"),d("15uLuAqPG3pd-t5rLxJ7GiPHl3dM-xyg9"),d("16i3wxB2P_LPGmq7UYhl4N8K_yWSJDfhX"),d("17Je0W1HaxrUI4r46kwkRYPrV9iCfWL_S"),d("18GDDBpBhYGSwVQ5HiaxakoAYRe5X3XzA"),d("18IfN1ojapEbjAUNQfZMkO6PfzyrryMig"),d("1DGKjrJzqM_zMt0ppOkBV4ncxB-d8sqFS"),d("1Dbuj3gRaJKuRe1hSUA9dk03aQb--dD1N"),d("1DqLRN86d9LYm7eWrgk8jLFyCyDK9v6fU"),d("1EIyiE83bsF5fUdklcIHKCgH9oal8BWyL"),d("1Gc8ggMKWe-2B4Z2pNlhvXoVrmnZO5WJg"),d("1I_FDYuKqa8yHdDPJ67DTeNl8ccC6Wbib"),d("1I_UwnE5CRO62XFBfzkb5Z3HS0g-wmHz5"),d("1KNouBysrqrTSkDnjyws6BXnWOukwStnF"),d("1KmK_4LbdESFWkVHtusPVzKjrXmzFqcCA"),d("1MEFxO6fD4Y417V7IzATBH5L0yeJIn-hJ"),d("1MERJwG8UI5rRi8cp6cQLj6SovS9uL-1c"),d("1Q7imMM4FfStYvHywGEsACtb9s74-8h7W"),d("1QG35nfgcI7MZh5rznIkgr0NvAjQVRtd5"),d("1QH1X0HrvxFYuj92OkGu54nAwnF4CF5YV"),d("1QMiuERsDSGZ9chhvvVCeBPZyJPfRYbqh"),d("1S16PNrts5YbvsY4AXN9o1ZAgapKDLHBX"),d("1SMfy_57PS8XVyYC9y_osCLF8AN3rZEQs"),d("1U5jQZbyP8nTEb3iIBxmPyNZlTVthwnSi"),d("1UmzzrKB_Bs0FEtLJvptilTcRdb0TZYWQ"),d("1VCupQfdtNlq_pYRSOBxrISIHpEJIxafz"),d("1VF97iPV7f0YUlEJCM9NLTVbbzt_sET3m"),d("1VyqJFfLdQbYa_6WIY0_AIyZ7e4FurSll"),d("1Wn-H9Pn75NqrROvcVsnFs8PMI3N9kF9H"),d("1XJeO1302xaLFqND0x1vtLUFEvzdE1L9a"),d("1Yk4tdkqG0zIw6YU-L-bHvKoM5shJt80H"),d("1aievuelfjRLC0d3gX1_OYGMOgQMzeylJ"),d("1ajs0NP78650z2lMcgrCzLYGpSpkXrHin"),d("1aq5jyp_tttVzw6oJYaYFY1C7Mxqq9xnj"),d("1bDqLKhb-DJaxBd10ewgJfe5Ld_pnAo94"),d("1caXmgg2A7jvafZtzOx9TQKcfFWRAP_9s"),d("1caogbcm6kxpmXYre1PaQP9KiekITGg9O"),d("1dr7WrITzH5wy2mWc53OsjT1L6-_tyzyK"),d("1drLDEG72lSt_hcnazi2Qg82qUwcn6pt8"),d("1eRzsXUhwVb3TdnaaMBCSNacyVWeKMk36"),d("1ebKnk7nNZqavzge36QK6puO0K2lrOiDW"),d("1fbpE42aGZdlrBO3qTCM5MILeWKtlSm8y"),d("1gcob8P4iKq2fjTbFurOsE5sJujkcP5P0"),d("1j7wVkpDEIuOqGX30exRwd69rZnoVisbM"),d("1jc4u_YXwKDjYe1inGMkjmIwCsOHBwbB-"),d("1kj4LAVr9xrnm030JqbIpduIT_hULFAnj"),d("1rfTeHuwFrg63f8g1PB7kZuhISCjDotP_"),d("1s12LNdc2Z_r1T24_M0ogbBEi5CC_atRS"),d("1tYbOft-L3TVZcIavIYZ5yQ4n3TA6uTO2"),d("1tfgENJGUh9mcBXJglpV1t3_2rspjxlND"),d("1uWop-Td1tt5jEBQ7Tt2sprovGnsKGrPo"),d("1xq8Ut193SPGkIsNMhYImp1cTmKyKmtmt")],
    polaroids: [], height: "1,70m", bust: "82cm", waist: "62cm", hips: "90cm",
    shoes: "37", shirts: "S", pants: "36",
    eyes: "Castanhos", hair: "Preto", nationality: "Brasileira", instagram: "https://www.instagram.com/pretaguiimaraes/",
    portfolio: "https://drive.google.com/drive/folders/14dbFiqsNcK09jtj48K-UKqBEAIDPzEzu",
  },
  {
    id: "11", slug: "renata-miller", name: "Renata Miller", category: "feminino",
    coverImage: d("1yAyjIXnrIMQxL7HfU1XpxlTfwANVE0o4"),
    images: [d("1yAyjIXnrIMQxL7HfU1XpxlTfwANVE0o4"),d("1ADSpnIkW3naEiCPRIgSKQ1ZunroVS-Yl"),d("1ZiKDGKAg5DBTQ3eMSBxeQcpYXrbSSkzc"),d("1aWWEDX2_3wpcM8zfctSWoBHNCI0xWOwH"),d("1YV0CF66emR_6j_DKsUhVNEc0omxDi6Ks"),d("1yPLov7L_YYSv9xBUXK2yhXp9WjRWTbaS"),d("1IjF-yWGq0d76GmMejqEF5hU9W0KDcIKq"),d("1KGIMdLHSDiGx8bGSn7vaSTYRnWqfQwdJ"),d("11KGijYBgOjnbGL7yJujmEzxCvqAhCJiZ"),d("1in_QS0dHNHN7dwfA9G_Gu6l_BgW6wjk6"),d("1s4aC-MrkmwwifSnOpwCgJgCfEshML2pN"),d("1246l1R_94jVekL2Oz9wAZq-hbOQGH60n"),d("1KH5rND8W3XzHzGAfKWDlOUY9-fYwJPkw"),d("16KQGVPV3mcn_PTQWUDKUALV7F6Ia3G_F"),d("1S9cRplvv9gQBRWzpWa6u61axO70MC6ov"),d("1iEw8JiJGnekLWB5j3dA0okSWSx0TXHP7"),d("1BMleWsd4lmvp_JpdqbUOQ3HxLWUNG_wd"),d("1oR5gmhIA3Va6V7z_v00pDnffYrxDSwOQ")],
    polaroids: [], height: "1,73m", bust: "78cm", waist: "61cm", hips: "91cm",
    shoes: "39", shirts: "S", pants: "36",
    eyes: "Brown", hair: "Brown", nationality: "Brasileira", instagram: "https://www.instagram.com/rmilleer_/",
    portfolio: "https://drive.google.com/drive/folders/1YwquDuStHktcMrEXp5c5orDn7_fyZ6ZX",
    featured: true,
  },
  {
    id: "1", slug: "richard-carbonari", name: "Richard Carbonari", category: "masculino",
    coverImage: d("1WdW9-TfGm0Ry2h2ovaWj48VnnPW2qlbk"),
    images: [d("1q7hHDCT8YGPwi9vXp4lbhEFCodOeDVsP"),d("1n53U9Ghm-fAbRkJJQBJ3A9qtRfcWo1VH"),d("1ACfvobQNpC6RVIJxEwidgl_k7wwMd9rN"),d("146Xt8WI1qxhgt0XC6MApJilSUDqt-G3f"),d("1z1TBsK4kNf4uX8gxRSBYnB2pr31CFbao"),d("1rgyTDm-0SDfP544o9NzesEfTc-CtJ-TD"),d("1y9-saC186SAEDOxK3wRa2pdeqWRPMiRG"),d("1Aa5whm4_0xD16N-RneaxZmAapM-uiLl5"),d("1QmQ3PcdVoGUWJvxaL75XiEOTzR5x_Gbh"),d("1CbMo2hC_sJFYevqgMZF57qJ0DchbkwKd"),d("15iJijOJOKUWGyRmS3KrO18lLod1vn0Aj"),d("1rJ4FtoEqE2BzdaqAZlolZroL4SqfC-9M"),d("1SEiBV4H1CtrztUIAs2L7BwsbH_PrbM5h"),d("1J4Js9J9BAlQ74N8DYnS1FNz0NFh_bIBF"),d("1QYJ-uu77Bo5eriVO9712si4v8cNQ7_en")],
    polaroids: [], height: "183cm", bust: "97cm", waist: "79cm", hips: "94cm",
    shoes: "44", shirts: "M", pants: "32",
    eyes: "Dark Brown", hair: "Dark Brown", nationality: "Brasileiro", instagram: "https://www.instagram.com/richardcarbonari/",
    portfolio: "https://drive.google.com/drive/folders/1MVzb35urA1ZTQkiu0y9YoYqDyVQkE6JD",
    featured: true,
  },
  {
    id: "13", slug: "samira-leopoldino", name: "Samira Leopoldino", category: "feminino",
    coverImage: d("128REp4tgzfvybAtAszt9dQpunGKTZvEx"),
    images: [d("128REp4tgzfvybAtAszt9dQpunGKTZvEx"),d("1-YjnUDgfoiInHuYxfVUPsrdFk8dhqKl-"),d("1tIex6xQsSoz3nht8b0L1ba3w-2C5qsV3"),d("1MrnwZDlJXi_8A49XPnmCKqAz6VEDxy5E"),d("1I1PHO2LgzRAtjMMd6YIWvbEd5VvC6v-G"),d("1_lOL9kTqEtnuPh6YnfbnS4KDCR3bfhI2")],
    polaroids: [], height: "1,77m", bust: "86cm", waist: "65cm", hips: "96cm", shoes: "37", eyes: "Castanhos", hair: "Preto", nationality: "Brasileira"
  },
  {
    id: "29", slug: "sofia", name: "Sofia", category: "feminino",
    coverImage: d("1wTYDdkt6n5SnCVAKb5Pg-3wxQce-xAbg"),
    images: [d("1wTYDdkt6n5SnCVAKb5Pg-3wxQce-xAbg"),d("1-0v6d7ZyvzlKfX9sW7ys7d_zdRbr8naP"),d("13b8otk8l1iBx1Rg-wg_UzMqB5gYldYej"),d("15uLuAqPG3pd-t5rLxJ7GiPHl3dM-xyg9"),d("16i3wxB2P_LPGmq7UYhl4N8K_yWSJDfhX"),d("17Je0W1HaxrUI4r46kwkRYPrV9iCfWL_S"),d("18GDDBpBhYGSwVQ5HiaxakoAYRe5X3XzA"),d("18IfN1ojapEbjAUNQfZMkO6PfzyrryMig"),d("1DGKjrJzqM_zMt0ppOkBV4ncxB-d8sqFS"),d("1Dbuj3gRaJKuRe1hSUA9dk03aQb--dD1N"),d("1DqLRN86d9LYm7eWrgk8jLFyCyDK9v6fU"),d("1EIyiE83bsF5fUdklcIHKCgH9oal8BWyL"),d("1Gc8ggMKWe-2B4Z2pNlhvXoVrmnZO5WJg"),d("1I_FDYuKqa8yHdDPJ67DTeNl8ccC6Wbib"),d("1I_UwnE5CRO62XFBfzkb5Z3HS0g-wmHz5"),d("1KNouBysrqrTSkDnjyws6BXnWOukwStnF"),d("1KmK_4LbdESFWkVHtusPVzKjrXmzFqcCA"),d("1MEFxO6fD4Y417V7IzATBH5L0yeJIn-hJ"),d("1MERJwG8UI5rRi8cp6cQLj6SovS9uL-1c"),d("1Q7imMM4FfStYvHywGEsACtb9s74-8h7W"),d("1QG35nfgcI7MZh5rznIkgr0NvAjQVRtd5"),d("1QH1X0HrvxFYuj92OkGu54nAwnF4CF5YV"),d("1QMiuERsDSGZ9chhvvVCeBPZyJPfRYbqh"),d("1S16PNrts5YbvsY4AXN9o1ZAgapKDLHBX"),d("1SMfy_57PS8XVyYC9y_osCLF8AN3rZEQs"),d("1U5jQZbyP8nTEb3iIBxmPyNZlTVthwnSi"),d("1UmzzrKB_Bs0FEtLJvptilTcRdb0TZYWQ"),d("1VCupQfdtNlq_pYRSOBxrISIHpEJIxafz"),d("1VF97iPV7f0YUlEJCM9NLTVbbzt_sET3m"),d("1VyqJFfLdQbYa_6WIY0_AIyZ7e4FurSll"),d("1Wn-H9Pn75NqrROvcVsnFs8PMI3N9kF9H"),d("1XJeO1302xaLFqND0x1vtLUFEvzdE1L9a"),d("1Yk4tdkqG0zIw6YU-L-bHvKoM5shJt80H"),d("1aievuelfjRLC0d3gX1_OYGMOgQMzeylJ"),d("1ajs0NP78650z2lMcgrCzLYGpSpkXrHin"),d("1aq5jyp_tttVzw6oJYaYFY1C7Mxqq9xnj"),d("1bDqLKhb-DJaxBd10ewgJfe5Ld_pnAo94"),d("1caXmgg2A7jvafZtzOx9TQKcfFWRAP_9s"),d("1caogbcm6kxpmXYre1PaQP9KiekITGg9O"),d("1dr7WrITzH5wy2mWc53OsjT1L6-_tyzyK"),d("1drLDEG72lSt_hcnazi2Qg82qUwcn6pt8"),d("1eRzsXUhwVb3TdnaaMBCSNacyVWeKMk36"),d("1ebKnk7nNZqavzge36QK6puO0K2lrOiDW"),d("1fbpE42aGZdlrBO3qTCM5MILeWKtlSm8y"),d("1gcob8P4iKq2fjTbFurOsE5sJujkcP5P0"),d("1j7wVkpDEIuOqGX30exRwd69rZnoVisbM"),d("1jc4u_YXwKDjYe1inGMkjmIwCsOHBwbB-"),d("1kj4LAVr9xrnm030JqbIpduIT_hULFAnj"),d("1rfTeHuwFrg63f8g1PB7kZuhISCjDotP_"),d("1s12LNdc2Z_r1T24_M0ogbBEi5CC_atRS"),d("1tYbOft-L3TVZcIavIYZ5yQ4n3TA6uTO2"),d("1tfgENJGUh9mcBXJglpV1t3_2rspjxlND"),d("1uWop-Td1tt5jEBQ7Tt2sprovGnsKGrPo"),d("1xq8Ut193SPGkIsNMhYImp1cTmKyKmtmt"),d("1-0v6d7ZyvzlKfX9sW7ys7d_zdRbr8naP"),d("13b8otk8l1iBx1Rg-wg_UzMqB5gYldYej"),d("15uLuAqPG3pd-t5rLxJ7GiPHl3dM-xyg9"),d("16i3wxB2P_LPGmq7UYhl4N8K_yWSJDfhX"),d("17Je0W1HaxrUI4r46kwkRYPrV9iCfWL_S"),d("18GDDBpBhYGSwVQ5HiaxakoAYRe5X3XzA"),d("18IfN1ojapEbjAUNQfZMkO6PfzyrryMig"),d("1DGKjrJzqM_zMt0ppOkBV4ncxB-d8sqFS"),d("1Dbuj3gRaJKuRe1hSUA9dk03aQb--dD1N"),d("1DqLRN86d9LYm7eWrgk8jLFyCyDK9v6fU"),d("1EIyiE83bsF5fUdklcIHKCgH9oal8BWyL"),d("1Gc8ggMKWe-2B4Z2pNlhvXoVrmnZO5WJg"),d("1I_FDYuKqa8yHdDPJ67DTeNl8ccC6Wbib"),d("1I_UwnE5CRO62XFBfzkb5Z3HS0g-wmHz5"),d("1KNouBysrqrTSkDnjyws6BXnWOukwStnF"),d("1KmK_4LbdESFWkVHtusPVzKjrXmzFqcCA"),d("1MEFxO6fD4Y417V7IzATBH5L0yeJIn-hJ"),d("1MERJwG8UI5rRi8cp6cQLj6SovS9uL-1c"),d("1Q7imMM4FfStYvHywGEsACtb9s74-8h7W"),d("1QG35nfgcI7MZh5rznIkgr0NvAjQVRtd5"),d("1QH1X0HrvxFYuj92OkGu54nAwnF4CF5YV"),d("1QMiuERsDSGZ9chhvvVCeBPZyJPfRYbqh"),d("1S16PNrts5YbvsY4AXN9o1ZAgapKDLHBX"),d("1SMfy_57PS8XVyYC9y_osCLF8AN3rZEQs"),d("1U5jQZbyP8nTEb3iIBxmPyNZlTVthwnSi"),d("1UmzzrKB_Bs0FEtLJvptilTcRdb0TZYWQ"),d("1VCupQfdtNlq_pYRSOBxrISIHpEJIxafz"),d("1VF97iPV7f0YUlEJCM9NLTVbbzt_sET3m"),d("1VyqJFfLdQbYa_6WIY0_AIyZ7e4FurSll"),d("1Wn-H9Pn75NqrROvcVsnFs8PMI3N9kF9H"),d("1XJeO1302xaLFqND0x1vtLUFEvzdE1L9a"),d("1Yk4tdkqG0zIw6YU-L-bHvKoM5shJt80H"),d("1aievuelfjRLC0d3gX1_OYGMOgQMzeylJ"),d("1ajs0NP78650z2lMcgrCzLYGpSpkXrHin"),d("1aq5jyp_tttVzw6oJYaYFY1C7Mxqq9xnj"),d("1bDqLKhb-DJaxBd10ewgJfe5Ld_pnAo94"),d("1caXmgg2A7jvafZtzOx9TQKcfFWRAP_9s"),d("1caogbcm6kxpmXYre1PaQP9KiekITGg9O"),d("1dr7WrITzH5wy2mWc53OsjT1L6-_tyzyK"),d("1drLDEG72lSt_hcnazi2Qg82qUwcn6pt8"),d("1eRzsXUhwVb3TdnaaMBCSNacyVWeKMk36"),d("1ebKnk7nNZqavzge36QK6puO0K2lrOiDW"),d("1fbpE42aGZdlrBO3qTCM5MILeWKtlSm8y"),d("1gcob8P4iKq2fjTbFurOsE5sJujkcP5P0"),d("1j7wVkpDEIuOqGX30exRwd69rZnoVisbM"),d("1jc4u_YXwKDjYe1inGMkjmIwCsOHBwbB-"),d("1kj4LAVr9xrnm030JqbIpduIT_hULFAnj"),d("1rfTeHuwFrg63f8g1PB7ZuhISCjDotP_"),d("1s12LNdc2Z_r1T24_M0ogbBEi5CC_atRS"),d("1tYbOft-L3TVZcIavIYZ5yQ4n3TA6uTO2"),d("1tfgENJGUh9mcBXJglpV1t3_2rspjxlND"),d("1uWop-Td1tt5jEBQ7Tt2sprovGnsKGrPo"),d("1xq8Ut193SPGkIsNMhYImp1cTmKyKmtmt")],
    polaroids: [], height: "170cm", bust: "82cm", waist: "63cm", hips: "92cm",
    shoes: "37",
    portfolio: "https://drive.google.com/drive/folders/1V85R6Fsbz902WbcdS_1dZJwasXwvM2fX",
  },
  {
    id: "18", slug: "stevie-jones", name: "Stevie Jones", category: "masculino",
    coverImage: "https://lh3.googleusercontent.com/d/1j4wFKOdmqx_5lWAuQmGnEOXtThW6mm1L",
    images: ["https://lh3.googleusercontent.com/d/10OS-AKtwvsVEq8RKWCLXG_pM4hw3zfZk","https://lh3.googleusercontent.com/d/11M1YTZJUqQWhkXeaw_x_V-vteYDBLy8d","https://lh3.googleusercontent.com/d/12eneG_5t0Z8K9V9-W77J8vCJMp-FXDwk","https://lh3.googleusercontent.com/d/14UKd7lDPbTGgVV3jrUjQTrId7m1KLeim","https://lh3.googleusercontent.com/d/1AstMXBWamwp9qmtt-f7sKbQo4q7ZQMix","https://lh3.googleusercontent.com/d/1Ctz7jvxuCX0P6vMywxFU-u6CajTxLRrW","https://lh3.googleusercontent.com/d/1FR7niwshMT7gTTSKWhBdCAOujUKB6Q1T","https://lh3.googleusercontent.com/d/1G37wqZHsSB5kemNJH_BrssPpyp-PYCG8","https://lh3.googleusercontent.com/d/1MBs1mig9Oiyn2toHEZCKciZp7Ba7hc7K","https://lh3.googleusercontent.com/d/1MrYkR0y_XrNsoGBYanfKwSqaMoO--HJt","https://lh3.googleusercontent.com/d/1S6ExwxzgHf09A3hyWjgOxhT_NkkQn3uS","https://lh3.googleusercontent.com/d/1TY_XT0o0KzV5TakZiW5YxcKaDX5xcYaV","https://lh3.googleusercontent.com/d/1Zvztz-wXt1peOpQJnm7lf7xl8t7fI0jR","https://lh3.googleusercontent.com/d/1_23oOgRttOfhQ2ykpQQTQ5b30oZAK4FW","https://lh3.googleusercontent.com/d/1bcNmgIORij3lTjaoPljizpLVgc40SIGd","https://lh3.googleusercontent.com/d/1gLm9u3pOuVvErNQY_-MW_CcCVAa9pMjM","https://lh3.googleusercontent.com/d/1jUowa95YdZDevQytoybwSJizk3sB-7ty","https://lh3.googleusercontent.com/d/1lPhVDTyrT-AA4zD5n9-nv0-_AtpMD8iQ","https://lh3.googleusercontent.com/d/1nrUfBSh_aHhxWA_RLsqvX8Zr-rUjsswd","https://lh3.googleusercontent.com/d/1o47odPYijVZjz8qaavbwKYivV9d98frM","https://lh3.googleusercontent.com/d/1qH92Uh_q8OXA8MetZMJRP-FXuhPdX6Ix"],
    polaroids: [], nationality: "Brasileiro",
  },
  {
    id: "6", slug: "wagner-piazzoh", name: "Wagner Piazzoh", category: "masculino",
    coverImage: d("1xcfkrcUkZKNXXdW20WEyqD4eGM9GVLK6"),
    images: [d("1xcfkrcUkZKNXXdW20WEyqD4eGM9GVLK6"),d("1hzpPlUUfrWNasMYqGHsuT4MyliNY1BnO"),d("1dwagOoslkufMBxVv67-VFuBgGrGxDwha"),d("1pDSb-fXjjgXJD9iY7Tu6tTlvVhtLh3pJ"),d("10mdUdbNqDgo3VdhTtTY6UXcE6gq_mIXe"),d("1IR0MEhNLIaR6b05UNlDrFevs-VMG9CqX"),d("1QJCx-dQfXAnQQM1bTvHrxUIMtfNf3439"),d("1xIoTkhlaskrw7R3oXhhUxmiZK6fSGsOs"),d("1d6w9WnkQ64j0WS0Oic0Qf5JUWUxb2cRO"),d("1u2NfLAbBL0X-HAoWbGMv8YBwQ0wipD-7"),d("1ivl9tuAwMhAeuuZjNW8lTCNZuluyGfhR"),d("1_vxHw8PTaz5KPpChtjDv9dOid3TCqU5a")],
    polaroids: [], height: "1,88m", bust: "85cm", waist: "64cm", hips: "87cm", shoes: "43", eyes: "Castanhos", hair: "Castanho", nationality: "Brasileiro"
  },
  {
    id: "23", slug: "yasmim-matos", name: "Yasmim Matos", category: "feminino",
    coverImage: "https://lh3.googleusercontent.com/d/1jMHaL6sYrCPZUuG4TndJlyHovjZXlDTw",
    images: ["https://lh3.googleusercontent.com/d/158mcvFFFICrPiHpS1mYjVlq319UhbiUr","https://lh3.googleusercontent.com/d/17a0DeV6Kv4h_9nxYX0VzVG4dgp5kYbkc","https://lh3.googleusercontent.com/d/1BnUzE326GlJYFpTxElFIKRmJbiUejOL3","https://lh3.googleusercontent.com/d/1CCMZaCQDhxe3Pp7ml2CTYapjgH4CcHZx","https://lh3.googleusercontent.com/d/1GfhDOM1SfeR8Aqefewk7qD_HTMq3HrQA","https://lh3.googleusercontent.com/d/1MVoqCgGrDewVs2652ZiD0M8nupUABfcb","https://lh3.googleusercontent.com/d/1QjjCr_0Zvf7bZ3DH9cFh77dGJgPnhbR-","https://lh3.googleusercontent.com/d/1SbGYreMzavBy12cMy0PirWC8zKsyq3fR","https://lh3.googleusercontent.com/d/1TS6e_so0IDqB-wNUUAOcjHLIX7omGTTd","https://lh3.googleusercontent.com/d/1VMKY2S7B5UEc-24MlRSFmHs5_NRXE8eh","https://lh3.googleusercontent.com/d/1XN369QCxl4jAZYwho4rtQcmZcQbMRgrK","https://lh3.googleusercontent.com/d/1cm2HE0Xy-9HByJkxP37cnN5VBEnMyHHt","https://lh3.googleusercontent.com/d/1jMHaL6sYrCPZUuG4TndJlyHovjZXlDTw","https://lh3.googleusercontent.com/d/1n2Ix4fD4Lv4VX4pZXnbuARiGUqs0D6uD","https://lh3.googleusercontent.com/d/1uglBrv1oaQhXLvi8C61eYCQw_gcS-yww"],
    polaroids: [], height: "1,75m", bust: "80cm", waist: "61cm", hips: "89cm",
    shoes: "39 EUR", shirts: "PP", pants: "38",
    eyes: "Dark Brown", hair: "Dark Brown", nationality: "Brasileira",
    instagram: "https://www.instagram.com/yaas.matos_/",
    portfolio: "https://drive.google.com/drive/folders/1mKyXJbIdDzDtdlI1XVUrisEnrphJoLyu",
  },
  {
    id: "26", slug: "yassir", name: "Yassir", category: "masculino",
    coverImage: "https://lh3.googleusercontent.com/d/1-2XAZgAMv3V78am5kjXNc7EQTarxdihy",
    images: ["https://lh3.googleusercontent.com/d/1-2XAZgAMv3V78am5kjXNc7EQTarxdihy","https://lh3.googleusercontent.com/d/12IZM8Pr0T-pdqRtZMITZYK9qMxcik2C0","https://lh3.googleusercontent.com/d/12bMYnPRZ8nsdszLXnayY4sZVUnUJZL4f","https://lh3.googleusercontent.com/d/13o3PQfY9yjC9_oUt-l1btuo2Ba0-qkV6","https://lh3.googleusercontent.com/d/15FYf7u8F8FHguN7K8hlvFAQmFtDgRzci","https://lh3.googleusercontent.com/d/17HX3KZTDjncyHnKY_sgZ2Y37scqaoKHq","https://lh3.googleusercontent.com/d/1BLDWwvKQzwFbC9SnNrfcYta1YidqZGIa","https://lh3.googleusercontent.com/d/1GR2YRQBiukTi8tXRP4NFeLcKfMvjLAvG","https://lh3.googleusercontent.com/d/1Mip90Xv_zzRgdU6-KdS1GnOP-0jRsM6E","https://lh3.googleusercontent.com/d/1MmzIZJ3dzBIVBp556QpRNI-fARvt8BVR","https://lh3.googleusercontent.com/d/1NsCFxCxZur-0n7b3Vpr0QSEC2WKjjrmQ","https://lh3.googleusercontent.com/d/1U14ApVTSyu4bd5x1LgBvjhl2cW1hSC3y","https://lh3.googleusercontent.com/d/1VYdyhRzAKBQj7iACgotnf-KCHErzUw-a","https://lh3.googleusercontent.com/d/1Zx7raykdTWq3F0bDmOouNzWaTjvCdGE5","https://lh3.googleusercontent.com/d/1ZzQmhX5z6_SsfC-5RTMjbosPWtVN00eR","https://lh3.googleusercontent.com/d/1a-8obd6fv50epA-ZkrCuio8sh6rD45rg","https://lh3.googleusercontent.com/d/1cDKytXMhPntUg8sxZPiH5vn13ugeBm7I","https://lh3.googleusercontent.com/d/1d-f9Op2lIfmdD7-MERf7i1jdTv4Fj3vZ","https://lh3.googleusercontent.com/d/1dUToSoWKW0oCLMHL8Sd-v_wCrGxHmbE3","https://lh3.googleusercontent.com/d/1dX0mWi0WRVD1_zDHny4FlW-ctMxm2ljS","https://lh3.googleusercontent.com/d/1oJ4CpWrMmLxIDwfRQRq7TK30zsw7nPFO","https://lh3.googleusercontent.com/d/1uiyTI91HlELz7sncjaxGCk0r_42LQ4-U","https://lh3.googleusercontent.com/d/1uxTWJofWuWZPawQJN9P1ILyM72JmpvZG","https://lh3.googleusercontent.com/d/1vQ77N3Zoj3MoBTgOvaf_f-Tv0Ks01L_o","https://lh3.googleusercontent.com/d/1vqDlMnW69JQhCYFpByZdKj0m4syq1Jc7","https://lh3.googleusercontent.com/d/1yyjGjr25k2tnFAu5LFX8Rkk6APEb9j9Y","https://lh3.googleusercontent.com/d/1zAI8fGJmYbPy2eGNjivVxxsIUIkQlogq"],
    polaroids: [], height: "1,85m", bust: "92cm", waist: "82cm", hips: "87cm",
    shoes: "43", shirts: "S/M", pants: "M",
    eyes: "Hazel", hair: "Black", nationality: "Brasileiro",
    instagram: "https://www.instagram.com/jassikamuzu/",
    portfolio: "https://drive.google.com/drive/folders/1qjtQXY1czSPN3UdW9Rhq1pu8-Qs842nx",
  },
];

export const getFeaturedModels = () => models.filter((m) => m.featured);
export const getModelBySlug = (slug: string) => models.find((m) => m && m.slug === slug);
export const getModelsByCategory = (cat: ModelCategory) => models.filter((m) => m.category === cat);