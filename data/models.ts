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
    id: "14", slug: "fernanda-faleiro", name: "Fernanda Faleiro", category: "feminino",
    coverImage: d("1DLyrt3f0s8Gv0IMOa4X0WpVVH6IMdliV"),
    images: [d("1DLyrt3f0s8Gv0IMOa4X0WpVVH6IMdliV"),d("1W4gzdSI-xxCrynyDFSXhylIU4rgbUM8M"),d("1Y1S7XFwvPn6kr--GgR_XTGhghUPpLbWo"),d("1s5HtF5IKKqlvFN-PCS6x-17s3e2pCS4g"),d("1o7-mmzQtKyESZnEtvHI2TCAGVp2hrE0R"),d("12fjo6pCBtI7TtOCLg03UHqlDA7dte8fC"),d("1SxOO2U8bW1D25yaWCYFQxTUO4ll_XzW5"),d("1XUzcATw8OPuzBWmwDoA9GXtBxocKcPR0"),d("15x2kCuvkjaq-Vl0C1IO9EvNC25PeXsom"),"https://lh3.googleusercontent.com/d/1Al2X4CLgQq_zj_eiW0CsdkcqZj-ES0J5","https://lh3.googleusercontent.com/d/1irC9-A80az2Wjd1-otSZQkVBSEFK3Otr","https://lh3.googleusercontent.com/d/1jT-glR6sSdi3iv10-s8XYcmDtyGmVlnu","https://lh3.googleusercontent.com/d/1-huS2q1TyB67S0REYBqEItsPTGgQXuit","https://lh3.googleusercontent.com/d/1h_Zfcbdr7KJNe5hUAi8NHVIrVOQdfN7U","https://lh3.googleusercontent.com/d/1Ddv2hToyzTZinVBAfWS4ybeJhK-bZgbB","https://lh3.googleusercontent.com/d/19ENo0zhMSTSu-f5Xq6TNjnezWpOHs7Wu","https://lh3.googleusercontent.com/d/14e6tkI6t_bqpJ5x_stpwZ0-fSaICLKiS"],
    polaroids: [], height: "176cm", bust: "78cm", waist: "62cm", hips: "89cm",
    shoes: "39", shirts: "XS", pants: "36",
    eyes: "Brown", hair: "Dark Brown", nationality: "Brasileira", instagram: "https://www.instagram.com/fernanda.faleiroo/",
    portfolio: "https://drive.google.com/drive/folders/1OaVR0ooI0sSNizCOlvHc6OEXVxLiknJP",
  },

    {
    id: "19", slug: "fernando-nascimento", name: "Fernando Nascimento", category: "masculino",
    coverImage: "https://lh3.googleusercontent.com/d/1qMJ8VCmosJhogYnH7QDyIzQE5b0ZklG4",
    images: ["https://lh3.googleusercontent.com/d/129xx13XxpuGh6UN_BHSy8xBdqGcOp2vi","https://lh3.googleusercontent.com/d/19P8YDtSNVbFhM_9NUjBdpPOFEm99CO9a","https://lh3.googleusercontent.com/d/19lhnUAlgeimSANacOJ8Vvz7A5PGmaYQc","https://lh3.googleusercontent.com/d/1E_c84CnBG2Y9KTAM2J_8FBIvZ6Tql6aj","https://lh3.googleusercontent.com/d/1KuwWelyZas-PorEqm_F74rMK6sthlnWQ","https://lh3.googleusercontent.com/d/1QHO2yeAUs0sKxrKWGL3EGsd4YacTP2aE","https://lh3.googleusercontent.com/d/1W_q-0XpuytbJEjNFpQfTlGYeFbOpHtp9","https://lh3.googleusercontent.com/d/1fY4f8sIcsMn3wp_wMyHtL3Hy5xR4LzS5","https://lh3.googleusercontent.com/d/1iywGX0suPAOimG3hjes8VpruFw48JCNb","https://lh3.googleusercontent.com/d/1lucJPQcVIpU8VU_1GpWfCYOKRkWKn3Wg","https://lh3.googleusercontent.com/d/1qMJ8VCmosJhogYnH7QDyIzQE5b0ZklG4","https://lh3.googleusercontent.com/d/1uwN_xSPDs8Md8yJG-BI-YXcJqFlngvJb"],
    polaroids: [], height: "182cm", bust: "96cm", waist: "78cm", hips: "94cm",
    nationality: "Brasileiro",
    instagram: "https://www.instagram.com/fernandonascimento____/",
    portfolio: "https://drive.google.com/drive/folders/1NV1agOCTVXz0XNOrdfqbHKqeC2Nfc1ys",
  },
  {
    id: "22", slug: "florencia", name: "Florencia", category: "feminino",
    coverImage: "https://lh3.googleusercontent.com/d/13VvDYnWxRiAA8b-677CdbiBHK7VDa56W",
    images: ["https://lh3.googleusercontent.com/d/119aclghOTCjx5pdwD1cfg-XzZbfaeniH","https://lh3.googleusercontent.com/d/12j-PNGBmEoTX7Q2LlAUnB4N5fd6P_ZIz","https://lh3.googleusercontent.com/d/13VvDYnWxRiAA8b-677CdbiBHK7VDa56W","https://lh3.googleusercontent.com/d/13ZJkR31OrBGrJnbtKmWF36Zip_bjP2lA","https://lh3.googleusercontent.com/d/15KKGFgOt1U6BdI_On__-cH3dgTMVgS-b","https://lh3.googleusercontent.com/d/17d_66RFqvA3Y5tXvBYUdrXKHfMiFG57y","https://lh3.googleusercontent.com/d/19bgeNVg8c1k8nn7A8LgcJ8YC84cRQgie","https://lh3.googleusercontent.com/d/1AuaX_gnlR1OgTeHzJr5DMBRkq_MhPD9u","https://lh3.googleusercontent.com/d/1C0rvzn5W-DMA8XNjcdZSJDdV4eOrptK5","https://lh3.googleusercontent.com/d/1DPaYr0zO_TEI9s8tvbGpGxewmxwQKsYW","https://lh3.googleusercontent.com/d/1DWnaGpSkpZ57DqoCytPPxKNdUtp2RJI5","https://lh3.googleusercontent.com/d/1GOwIoPj1YV0QoNXtxAI5FNupQCvO5IFa","https://lh3.googleusercontent.com/d/1GugCm990xPH1VChZuRstRmDZpKDRZvg3","https://lh3.googleusercontent.com/d/1KD7KDkGvORvLkazOFQPMjIFeD7NcePue","https://lh3.googleusercontent.com/d/1L8fqn1IgZD1wUdXqkVumMhMvcPih90tD","https://lh3.googleusercontent.com/d/1OMNZUdPksTi3R_BmjIvqSTdNuGcrmkfB","https://lh3.googleusercontent.com/d/1P9ycBRmpsmsoDsL5E3d-J5OPt-HzarrF","https://lh3.googleusercontent.com/d/1RSfdU6c2gVQZp8nydcWq2onHzGVBbCfk","https://lh3.googleusercontent.com/d/1RYMJXc2vQh4OgGs5dsSDhUnlViZVoVAQ","https://lh3.googleusercontent.com/d/1RqCmAy-TqE8cm90g2el9HeEddtH620ay","https://lh3.googleusercontent.com/d/1Syb4DZeP7QioIGB_q-DTK5Da7f20SBVO","https://lh3.googleusercontent.com/d/1U-oqR6Z5UOiWejO3DxqOWghd1rnSZsoS","https://lh3.googleusercontent.com/d/1UdqB1fP2-PzQuBCCPaCpthpGrIaOKnSW","https://lh3.googleusercontent.com/d/1UqMLYOKbI1Dlxh_KURuC0nrzhQlDSj9K","https://lh3.googleusercontent.com/d/1VV5h5a7hmRAcMoFc9TkgD7S5AaJvULNN","https://lh3.googleusercontent.com/d/1XDCuahE24kln13xpuRcBBUUUWtqW9xIA","https://lh3.googleusercontent.com/d/1_ePJDxf4eBIAhp6i_mhNuHPbVqh6TsH9","https://lh3.googleusercontent.com/d/1cBzjoIANIX5z1xj-fwEPmsRY3JKV6tP2","https://lh3.googleusercontent.com/d/1f0qTW7mlxLbVQXiZ9Z9U9LjlxzQ9fo7F","https://lh3.googleusercontent.com/d/1lN4r_1H5_ePsn8BQkKZZYgiuOKhTBTWp","https://lh3.googleusercontent.com/d/1mMVFKUkAsdGefthbUwqN0E3rStHDv-Lyd","https://lh3.googleusercontent.com/d/1oBNl-2Cn-yV4Mk1da5k7DjQNpwKbxoBG","https://lh3.googleusercontent.com/d/1oGlxZJRPT7E9zdsmMkg5-QkFq8kE30Vg","https://lh3.googleusercontent.com/d/1p0qYb8l582asD1TJ8KKlXDCTKu-YUuty","https://lh3.googleusercontent.com/d/1pGN2pL9p3umUrXJzmvsTfyGEby0SBrFL","https://lh3.googleusercontent.com/d/1r7cZCJXxwhY6I34ZZ-ENhKYHO-hIhmQ_","https://lh3.googleusercontent.com/d/1sPTr_72bZq-IxP3X7U8h6YNgX2jgdUgX","https://lh3.googleusercontent.com/d/1t9kAQHdK41sEWASTzfhWz97lRZWpTdGw","https://lh3.googleusercontent.com/d/1tMecfJyKwPSqtngAioPQELdGhz8PZT4D","https://lh3.googleusercontent.com/d/1xdcr2qIsPLIj1XYbCJtVrIoBLLbDnzDb","https://lh3.googleusercontent.com/d/1yP10Pc58LCzmbBXeHH_zzoTgXogZb9Nm","https://lh3.googleusercontent.com/d/1yQSKRJmxf3VsdWZ7FcqFNBYasDBHf13f","https://lh3.googleusercontent.com/d/1zzxJVll07YcTmbbGsgHEEmFFqlRSq4Sl"],
    polaroids: [], height: "171cm", bust: "77cm", waist: "62cm", hips: "91cm",
    nationality: "Brasileira",
    portfolio: "https://drive.google.com/drive/folders/1vDOTlcrqspH2SHitGOQDZ4bgK_1JJVT4",
  },
  {
    id: "12", slug: "giovana-peixoto", name: "Giovana Peixoto", category: "feminino",
    coverImage: "https://lh3.googleusercontent.com/d/1Cv5AwDzqGU9Ai-a3ev4XRD5iRYjaibOi",
    images: [d("1YIgOBx-qcml5XzDWw-FLp9v4UlerboYA"),d("18jaynPT2zb-BrE0R3E8kGpKI8Z7__9LD"),d("1cuLs5ioHKp8nXG5xQDxhAKp_uYLIU2-z"),d("1wBvH5BUJeKhgERD3yZ3badYESR2I8xy7"),d("1GSRVEr5K3g3zlAGwtL5xuLwQ2JQBNW-I"),d("1PITCbiNuR6izfl0-VzBmf5C1E2q0ITKo"),d("154YpjR9Zdk5ePIijNbDWi5crhQgiQ8cD"),d("1lKyLnF9qTnPEpbbn8Qxb9dyP4Nv0iu_y"),d("1pduPL0i5icQ-_Gfo-HHsB7AVSiRvGUU1"),d("1MyeBKnsfUi82I_-dSXFlR-meFY-zHofn"),d("1sBi3jkIPQLmr-t_CxKQTXe2hOBYYeS8p"),d("14rWqjdk7SGGA7hs0FP-vP62DismJzCk_"),d("167g-fSMJqlbpcYQTnxyoc-ukiwpKzKhy"),d("1wFYkG5jtM4kfFyDaJ-rqEqji9TDef7v1"),d("1-BOJeGU3ek2_iWMQSNzDf7uSi6SpYxdl"),d("1Sx6azXPifP221ogFRjuOA9WlNBjP4cZA"),d("1qzPxo5a_SYnC9cfSOrgfrGnJowUHqzUr")],
    polaroids: [], height: "1,72m", bust: "80cm", waist: "62cm", hips: "92cm",
    shoes: "39", shirts: "XS", pants: "30",
    eyes: "Dark Brown", hair: "Black", nationality: "Brasileira", instagram: "https://www.instagram.com/gio.peixoto/",
    portfolio: "https://drive.google.com/drive/folders/1s9XZXx3FLtRmBa5IFndAkvA531pHRAsJ",
  },
  {
    id: "9", slug: "guilherme-cajaiba", name: "Guilherme Cajaiba", category: "masculino",
    coverImage: d("18pOdJhHpySBruGk0jvgqCoOY8YgXkgW7"),
    images: [d("1UzBwqDxFBX3FZP5fWxb2fBiGQOC4qPeL"),d("1nHt81x3qCqFN5If6Zqo0sioDpXagRcia"),d("1lXtG7rDSfy3Dj3cD6KxrIr_LmGiV6rGY"),d("1RUFn1oysl2sqwUz7g9N8WZl2zBh-5efY"),d("1KpPVCzQoAgEDopQbXBrVfg1n16yBFAa1"),d("186sXJMeQlFjzUmFZQsEQChgp5XMavvL2"),d("1onaLEvqfu_z67_OXLac_MlOklxvk8ovj"),d("1SY56bmLDudPqjC3nsjtnA9zCGFgT7GxV"),d("18pOdJhHpySBruGk0jvgqCoOY8YgXkgW7"),d("15aeRnYBMcig7gRK03eMRjGpfsXJ3Qblv"),d("1Kn7Kgk6gxoXFsfkm-_f8Y8owF_9YRS6J"),d("1dxQMUpfc8A850Q8zFLiyskcGcUP3HrB4"),d("1d00BmJPjBvFo7Z-wgJrFhTrQQ9qrPzMx")],
    polaroids: [], height: "188cm", bust: "94cm", waist: "74cm", hips: "89cm",
    shoes: "44", shirts: "M", pants: "40",
    eyes: "Dark Brown", hair: "Dark Brown", nationality: "Brasileiro", instagram: "https://www.instagram.com/cajjaiba/",
    portfolio: "https://drive.google.com/drive/folders/1i96MK6SFzrUC968iDNQVBw0p5R5qZ8uj",
  },
  {
    id: "25", slug: "guilherme-ribeiro", name: "Guilherme Ribeiro", category: "masculino",
    coverImage: "https://lh3.googleusercontent.com/d/1OmNEjRc4Hjz_9JuLkSMxlRbRxq4QHNwe",
    images: ["https://lh3.googleusercontent.com/d/10b1eeM-3bC2cfORnDaVXN5DGFd7ciL-Y","https://lh3.googleusercontent.com/d/10sckT1JIdfXr2FREM4nL4e5o7MMZPsLQ","https://lh3.googleusercontent.com/d/12ZjlMhmxCQa3A3s4aRlYNTnkjg4WeE81","https://lh3.googleusercontent.com/d/12mPDcPrEshA47YMwIwrSYG0I1N4Nk70N","https://lh3.googleusercontent.com/d/14BTdF8EbjYn9EHAskC2X6RfQi3Ex0djk","https://lh3.googleusercontent.com/d/18UJ5DsrAYAEOoqv5U3XkvtdZ3o7BRhW8","https://lh3.googleusercontent.com/d/1Al7T2smh4OY86POfoD4Co46NiB1oCraI","https://lh3.googleusercontent.com/d/1BXBJPu8zLYhOJeHszxwK3bYQPF3jekE0","https://lh3.googleusercontent.com/d/1DiWLOjjUzQYvJhdk1D1_W8cdump3n0Pg","https://lh3.googleusercontent.com/d/1G-5PGUB6tSuhvybY79kc6skdw4w0bcWl","https://lh3.googleusercontent.com/d/1G3iQip9fGUn2EJ0kFdzFVur5s__Sh2Iv","https://lh3.googleusercontent.com/d/1J8j07s7XaKcuQbLncu-nK4wQ2XZtOD9l","https://lh3.googleusercontent.com/d/1KB2-Mdqyt-osGvC1Ch5digWifMprnonV","https://lh3.googleusercontent.com/d/1LyFLrtS4Y3APnBnKRo_uEbM8z0erLRrz","https://lh3.googleusercontent.com/d/1OCHyiOTtSIrl31ccdxN39ZgWRaB5b4Rq","https://lh3.googleusercontent.com/d/1OmNEjRc4Hjz_9JuLkSMxlRbRxq4QHNwe","https://lh3.googleusercontent.com/d/1Oy0wQnLw-3hlsL0AJgi9pL6yaSr2r0iZ","https://lh3.googleusercontent.com/d/1QGIF2zDwm1_ZoEh-01WCzmikXx7j8n-L","https://lh3.googleusercontent.com/d/1QOidGjuPf_d9RTYTEppdaw8F-ASZVHnr","https://lh3.googleusercontent.com/d/1ReRVyTNfWljG-RXBda6uuHYHIaarbZEY","https://lh3.googleusercontent.com/d/1SWAhaZeh7rTu5Ufk0fdTBpiuXl3BU_1M","https://lh3.googleusercontent.com/d/1TFRiHycjz8uGZOVCJGKB6UO6NRSfp910","https://lh3.googleusercontent.com/d/1UaBOJ4Z8nPNlC2wG8rZcQOK9aU-dcC_I","https://lh3.googleusercontent.com/d/1VChMNo03qqr5v7aL8K_b4IAzRgAFDOGK","https://lh3.googleusercontent.com/d/1XW66jWtxU68S40N3Inwg7U--X7in-G9F","https://lh3.googleusercontent.com/d/1XzkO1M2H4EGzbzJ8DAQuV7NIfW_AbPKm","https://lh3.googleusercontent.com/d/1Y9ij6XbMtWIc01MoPGprmAgRRzxy1kxg","https://lh3.googleusercontent.com/d/1awLhb4Y4Qr4Utjf9YMDXPUY3tf6SnZq-","https://lh3.googleusercontent.com/d/1byXftHDlip96q1p9ggBybDkFigLqFNY","https://lh3.googleusercontent.com/d/1cbgeI-oSiKyvQPKKHXnMJE5ecADDOmPF","https://lh3.googleusercontent.com/d/1diZPDj40HtzvojioscgPUl6TohIIIlW7","https://lh3.googleusercontent.com/d/1eOhQU2bcqZSuXJnaEL8mnxj0WvyVOy_5","https://lh3.googleusercontent.com/d/1fUD9UdkMQ6lPXvEJ0viiITrHLEUHU0ZG","https://lh3.googleusercontent.com/d/1hxdS7WzhbO_l_IycKgtM2gRQz7gxoOLY","https://lh3.googleusercontent.com/d/1ijpo3QYCeD_W-LF7_3AUwZ69nBMG5xvz","https://lh3.googleusercontent.com/d/1k2ovJJ7QA6BE2drC_8MWRiaFlPKVMnhM","https://lh3.googleusercontent.com/d/1kaFpDJORsszHvP5LfR4cdxSK6n2zFcQp","https://lh3.googleusercontent.com/d/1qCF6sMYrnzWrd7V4lCLWuWeb_Io-bgGJ","https://lh3.googleusercontent.com/d/1qKeFVx_9-W_-Jy5xT-VjYkQKQNFBgaF8","https://lh3.googleusercontent.com/d/1qaz_Z9b_1VM-ROtJkQaDyo_qLe7OBF1E","https://lh3.googleusercontent.com/d/1rk7NwtkCjRE0-VLwM4DKViHsQMursdgL","https://lh3.googleusercontent.com/d/1tl8vaX-0BBXY7Jy9fkZCrrID5XvqROHt","https://lh3.googleusercontent.com/d/1v3qiWxnz7CCPk_wcreDLTey40FH5zA1Q","https://lh3.googleusercontent.com/d/1vMzNK2gz9_eFmBapSB_K2SNcoiyV1KMF","https://lh3.googleusercontent.com/d/1vPVPOLUets_wL711IKzQnGR0q6-92BJ9","https://lh3.googleusercontent.com/d/1vTZi9U32O8Nigl1ocHFBduKkm8_ng_kC","https://lh3.googleusercontent.com/d/1xC6QRFiYJ5rHv7vPuxCnGd_fTd9b4CUZ","https://lh3.googleusercontent.com/d/1xguix7JBWc8Kmv-ZflYM3KieLpW_03PO","https://lh3.googleusercontent.com/d/1yXTupGqOAKyhSYHuwqN0E3rStHDv-LMM"],
    polaroids: [], height: "1,88m", bust: "100cm", waist: "78cm", hips: "96cm",
    shoes: "44", shirts: "M", pants: "42",
    eyes: "Brown", hair: "Redhead", nationality: "Brasileiro",
    instagram: "https://www.instagram.com/guilher_rp/",
    portfolio: "https://drive.google.com/drive/folders/1XnAhIvyj0y9h592R6pUlD9tE25ri2lpb",
  },
  {
    id: "8", slug: "guss-camargo", name: "Guss Camargo", category: "masculino",
    coverImage: d("1CUrWbxMiE-fY44jNPvQhiTqx09Logpmf"),
    images: [d("1w7T0D9ftguujG9klWLWSnvU8fDbG4rG3"),d("179m_VHoG75a5wJfSXJcZ3WTdanL1i6CU"),d("1EFDdZTIiB3-HXUM65EBcH3XSqxgfeD9m"),d("1L68mUjIITLc27Rm2bHgBwpFO8LRlMJ22"),d("1L1PeQLd6IuQjQ9y4xBvuuz2jp4FP6whZ"),d("1-N_gReE-9gVSZ4KwOrun-rt8SslnmPYT"),d("1668xrbqAkpPu5DSAO_rm0TPVJKJ3EDLe"),d("1iiLOFvATblNLl3vDJNXYPSzVZCnuKRVp"),d("1iYJOaGJxV2o8tWFH6tIGmMyrWHvkR0BN"),d("1uWXzTEtMqSJi7_SY4I9q8vjzJ4xOYlw9"),d("1CfjKUabMoeSr37Wod8ylSqo9oq2b2aFQ"),d("1FlyuI-Ekt1Ma3boISoRkTi3nV60KdDRd"),d("1e9WAkx69hbUfdj52Nvs7Q4BNRPy20zv9"),d("1q-xHLrvr9LL_Tss8Mt_2_VR9HLLAQJSB")],
    polaroids: [], height: "192cm", bust: "92cm", waist: "74cm", hips: "88cm", shoes: "44 EU",
    shirts: "M", pants: "40x42", eyes: "Dark Brown", hair: "Black", nationality: "Brasileiro", instagram: "https://www.instagram.com/imguss__/",
    portfolio: "https://drive.google.com/drive/folders/1JIOUE9n3oZ6JsoVFmOPbukSN9HWDHT9r",
    featured: true,
  },
  {
    id: "21", slug: "helena-weber", name: "Helena Weber", category: "feminino",
    coverImage: "https://lh3.googleusercontent.com/d/1J_mVR-A9Oo-5vK5sM8axSO8vxHZPmMrX",
    images: ["https://lh3.googleusercontent.com/d/10SKW64UkXddGuqwR6MmHgFkC3v0rCJMq","https://lh3.googleusercontent.com/d/16oyie682lnzngr5VYo-_szjqvlfrfcer","https://lh3.googleusercontent.com/d/18RGAoC_Wn0wSGR_ZP_Fw43b6i3M6QcUe","https://lh3.googleusercontent.com/d/19363eoRX3foPMzoVALUa1KKnUEZlbmcp","https://lh3.googleusercontent.com/d/1D9KquxxP2iEjglsKe39p0a7OXEfchjT7","https://lh3.googleusercontent.com/d/1E-UO9Ayh6ew9tfmVwN-oQwsOR62CMcrd","https://lh3.googleusercontent.com/d/1ENa_tL_KFggJDktZ70HHH6LbiBeY24vk","https://lh3.googleusercontent.com/d/1KS6rHRZePk5FLq6X5sztBr3ADSceI6Xu","https://lh3.googleusercontent.com/d/1RESuQaiqdUazut8HdivQ4-ksmm9dmKrx","https://lh3.googleusercontent.com/d/1SXOx7vPX-KONsyjsCex4iy9zihP01RZ0","https://lh3.googleusercontent.com/d/1Y8RPxk2ElVPj0fyp3vipnbV85LhfS_tB","https://lh3.googleusercontent.com/d/1_E3Svi2-NR8IZ-0dUDv9ldGIsLmzbVh8","https://lh3.googleusercontent.com/d/1a78oH1pop0GSvZhlnWrWIdTBgZKEE3Ir","https://lh3.googleusercontent.com/d/1dOVtMAf5oVWOXir4Lps_bU5lutoiDMqQ","https://lh3.googleusercontent.com/d/1gbEHjjpSNe1wSLDkI3XYtb821Py6Moyz","https://lh3.googleusercontent.com/d/1iQKTBdYUgu66PZ236POMUAbQK60mQWnf","https://lh3.googleusercontent.com/d/1jOaOKLXiWY85JyMRRoQP9GS-vPIxeHtX","https://lh3.googleusercontent.com/d/1l2SiPt635rKeYrsCW1UVMebzv7xDFATC","https://lh3.googleusercontent.com/d/1tQUjQG3937mnQFAXWW7f-vcH5c7XrbLG","https://lh3.googleusercontent.com/d/1vn_aHFgB-1kuiT5U0mPO6EJnz5rQxOGl","https://lh3.googleusercontent.com/d/1wE9t7wfNbuJcMwL2bxI7RPDiJ6GMJXcN","https://lh3.googleusercontent.com/d/1wUVUiyDSOrik6pmYlgeET1tmLgyWwK96","https://lh3.googleusercontent.com/d/1xFd3ZwC6WpSBCRC1g2da1_XED1eTnwm5"],
    polaroids: [], height: "176cm", bust: "80cm", waist: "62cm", hips: "89cm",
    shoes: "39", shirts: "XS", pants: "38 BR",
    eyes: "Blue", hair: "Blond", nationality: "Brasileira",
    instagram: "https://www.instagram.com/_helenaweber/",
    portfolio: "https://drive.google.com/drive/folders/1XYjLdyfmGxBv89YQVBc47dDVcIU7bJYb",
  },
  {
    id: "31", slug: "iza-mazotti", name: "Iza Mazotti", category: "feminino",
    coverImage: d("1yhE3mF4nP7LhsBRV0Mnm8BNAZ4C_VbuI"),
    images: [d("16t4stUrtuHJ12aIvh2kPRkJgq3zoCnW8"),d("1REsEhUSHCb4xR9Ixes8Bx1_IrggCiTgj"),d("1rXy32D2RYSiV1JRzCzImA6i5_S1TYc8E"),d("14IL99hnKKBPi6sDLdxQ3PvKP_FBBmJNJ"),d("1L1Th2qgfomnvrwPi0X7JyXWdiEvpy6mG"),d("1OTbDjJBtTA3yxdX6SF_U4LCRogyYIII4"),d("1wCOOy6T0oLl78J37DB5yQdg_H97VpvZY"),d("1r3keAbbUHW2CAxpCNLUhAI0UBR2HjWtp"),d("1x0Euk604n4v098mpXjcdwWLjPVp-fupl"),d("1swGA9UeSfQIbo-Vqmjka4rQj8oMfzVA5"),d("1diL3vjQJTmrf2fPfgwsBw2BR3SwxjoqQ"),d("1hN2xZOc441-S6bx8AghhszZMdNkqsGNx")],
    polaroids: [], height: "1,78m", bust: "81cm", waist: "60cm", hips: "89cm",
    shoes: "40/41 EU", shirts: "S", pants: "38 EU",
    eyes: "Brown", hair: "Brown", nationality: "Brasileira", instagram: "https://www.instagram.com/iza_mazotti/",
    portfolio: "https://drive.google.com/drive/folders/1GFH8AhUnDEG9DJOS2JFosUw7MSVJ8pzK",
    featured: true,
  },
  {
    id: "20", slug: "jhonny", name: "Jhonny", category: "masculino",
    coverImage: "https://lh3.googleusercontent.com/d/1X1qi90Mgi0C-NkTHDtcZO10d9n6j7N_X",
    images: ["https://lh3.googleusercontent.com/d/1-XZZcbvxUagm5VuwxNjrjOH664WisKEt","https://lh3.googleusercontent.com/d/1-yA8NRrVSpk6cYZmAFAlFmNhWwUQ1rok","https://lh3.googleusercontent.com/d/1-zb7MbSqGnkPbuyXmAXsmVX4pK_GmuP_","https://lh3.googleusercontent.com/d/11aJF49VShNPu2rjKMmIANHED4HWn0z-G","https://lh3.googleusercontent.com/d/14-bOxfhv6JX7fHInjNBKGpQxdeAE1A30","https://lh3.googleusercontent.com/d/16Qq5qhQtZNeB4Ms4kNphmoSA-8jbQ5GQ","https://lh3.googleusercontent.com/d/16fCgfihQELVECmdzg3eQT41CandYZoML","https://lh3.googleusercontent.com/d/184iQyh6o5u4kfpmOWe7fF_iR0qlBImPY","https://lh3.googleusercontent.com/d/1DLYCvt96VUiosJj2qis2kHVsUFdFG3Eh","https://lh3.googleusercontent.com/d/1EOrm1ea5qEGp0MympIWsd1lSk4nt6os0","https://lh3.googleusercontent.com/d/1SI8dVX7dKM5GuvTZW8YIbNfcygJ2vqH5","https://lh3.googleusercontent.com/d/1X11gbuPD9v5rEuhaEOBY5kTI65My3aHT","https://lh3.googleusercontent.com/d/1X1qi90Mgi0C-NkTHDtcZO10d9n6j7N_X","https://lh3.googleusercontent.com/d/1Ymg29xavDOb_oAD90M7DDXEi7U6ISWUa","https://lh3.googleusercontent.com/d/1bjb7LBXcaPzdLU3ZfaaRtYQQvOgdG9EI","https://lh3.googleusercontent.com/d/1dHM5lg8FN8Olr0Ej3aef2IjPgnfVamB","https://lh3.googleusercontent.com/d/1e33RH5R_LD8uMIm7DSCKj5BUSaxykzKq","https://lh3.googleusercontent.com/d/1imSC7vRp9Ur9184BagVyJ6XbKDCaZEob","https://lh3.googleusercontent.com/d/1jjK-Ql0yaQnWUNoo0VvQn-TCF855h8id","https://lh3.googleusercontent.com/d/1lmPoObgFTnb3zvCf7IeObtGBxxJkZCv6","https://lh3.googleusercontent.com/d/1r2Lcr0W5s-_iJZmyr_5uMKMS7hdG8mP7","https://lh3.googleusercontent.com/d/1r5S-_3rJmiXvP0XwDF9iQKN0QtYcFryc","https://lh3.googleusercontent.com/d/1rJjQ0szKVRSzzxJskU3NvMtQZseoPmTv","https://lh3.googleusercontent.com/d/1uAWrm86wfy_ylFAvmkpT-vitvCeORMuH","https://lh3.googleusercontent.com/d/1vuVP_awESlH963XgZjGhWIQz6DRhVF34","https://lh3.googleusercontent.com/d/1x3Z4mYxuhXNHz_wI24zDK4G52UiZGkPt","https://lh3.googleusercontent.com/d/1yX0jFInRMbGYeNFFqyf_T6Gt7h9_vDew"],
    polaroids: [], nationality: "Brasileiro",
  },
  {
    id: "27", slug: "joao-padua", name: "Joao Padua", category: "masculino",
    coverImage: "https://lh3.googleusercontent.com/d/1eJHlG0M7V_2k5Z0fx2gr-txsZcg-d0ca",
    images: ["https://lh3.googleusercontent.com/d/1DWAXlrrdwyscdYwGoRQpql-6w0RaLIcx","https://lh3.googleusercontent.com/d/1NIbppIq7sjlPv0GYoV8ZAoKndknHuez","https://lh3.googleusercontent.com/d/1SBBy9Pu4y1bDKUUFbQbz8c2FyDRqc71m","https://lh3.googleusercontent.com/d/1URYy8ezzt4yqR652PyUZLQEvyIdgYePu","https://lh3.googleusercontent.com/d/1VDTPRvz1lmWNtmnLrAplusJ5XEn3o91t","https://lh3.googleusercontent.com/d/1XOVIL4JrBI3EJUGsGiJx9nTqSHygaZBW","https://lh3.googleusercontent.com/d/1XZqWnxCDIVSQ8-dZlOUsggo18bkhhPWZ","https://lh3.googleusercontent.com/d/1eJHlG0M7V_2k5Z0fx2gr-txsZcg-d0ca","https://lh3.googleusercontent.com/d/1sK1mnFm2ofWkRzQxfGEmxFMqZsGB3rxm","https://lh3.googleusercontent.com/d/1vKV_Dhlf6_HiaouDCayjp-QBJU_L5FyP","https://lh3.googleusercontent.com/d/1zHOrxc-iUD6R1_k2jUVH4zWc9lJ6YNzo"],
    polaroids: [], height: "180cm", bust: "95cm", waist: "77cm", hips: "93cm",
    shoes: "42", shirts: "S/M", pants: "40",
    nationality: "Brasileiro",
    instagram: "https://www.instagram.com/moraispadua/",
    portfolio: "https://drive.google.com/drive/folders/1QC4MImSkhiVfk4kPh0AW1eAWci-YJm-w",
  },
  {
    id: "15", slug: "jullie-rocha", name: "Jullie Rocha", category: "feminino",
    coverImage: d("1OhZnEla-2Y7yO4l0QhsRiWIKYA88k0Nv"),
    images: [d("1OhZnEla-2Y7yO4l0QhsRiWIKYA88k0Nv"),d("1JFK3Pf-r78kfHay6jJ0Kg-43T-YzSJfg"),d("1dZQT4LV7BP6GD8NMSaAOa9niIIvucND3"),d("1HtrjxIMWAOrOuZw2xnneR7yjbfqXNWVr"),d("1y9gkp20proJGbfKHemGXluQgi8Z1ahjX"),d("1kbRTeuPEOxpi4e4xga6GuYsUrLkr3YSa"),d("1kj9ELBmk71GgE-oGztyAyXuXZSzAFEIB"),d("1fuybtLeYgF6hC87acm6XLI9V2jD4h94c"),d("1Qa_3bbL6dAK-ErYXiGbbdySSE1Y3LolM"),d("1WcfJhu3lHOeac6qFflWq88Bv2E7DcYa0"),d("1-YQSZZB0foG1G1numyZE275ifmrHTFNM"),d("1ifTQLN48A1lB4DBzV6SbRrj1Xa-CLIaj")],
    polaroids: [], height: "170cm", bust: "80cm", waist: "64cm", hips: "94cm",
    shoes: "39 EUR", shirts: "S EUR", pants: "38 EUR",
    eyes: "Green", hair: "Brown", nationality: "Brasileira", instagram: "https://www.instagram.com/jullierocha/",
    portfolio: "https://drive.google.com/drive/folders/1_wrHwfhtrEqQL8LpMbmaIeT5PSb6dnrW",
  },
  {
    id: "2", slug: "junior-benevides", name: "Junior Benevides", category: "masculino",
    coverImage: d("1kW0h4bO4TufP9xxt-x6mPXainBKDWeFq"),
    images: [d("1qNC1XkSPLye8uSPQ-zyZA_a7rkTMq6rj"),d("13a8fpwoD5AzbQPmVgsfnSktvKooHWD--"),d("1CgTpHjxFgmnbo2IaHo00LCOLmt-LbmVF"),d("1GofjHf6f2aaNywMS_rvE2231HO0Yi4ka"),d("19RbUQNwHww8J6n5JcF53mmzfty2xhLC7"),d("1XUc8-OYla1ga4L6opZT-jDdoVwVptE11"),d("1ChAamB9p7bvUOGJiyUXsdxyGkm8c6WrY"),d("1ug_UzwcQJn5tHwV8Nu8tw0-rhuiGVvSb"),d("1gavX3LabcwSzV1dzgKcImMfFC1SlewCm"),d("15hfgTUOj1OYNo-2LAJ3Ckp0PShl1Yyki"),d("1fgrZVFG4maICYyjnTrH1isDkIMY4Io6Q"),d("1AIxsfvbidOhxG_uu9dyU1tL5BG62Jlxh")],
    polaroids: [], height: "1,85m", waist: "78cm", shoes: "42", eyes: "Castanhos", hair: "Preto", nationality: "Brasileiro", featured: true,
  },
  {
    id: "5", slug: "kareem", name: "Kareem", category: "masculino",
    coverImage: d("11DI2vjqPhyiBfhbxRC1YrduFvvwpUEOh"),
    images: [d("11DI2vjqPhyiBfhbxRC1YrduFvvwpUEOh"),d("1gZYMiCMzsGIXHK6J6udeFX7YbXFN28tH"),d("1l6qiVdAtu05VkG4WdTfI-NJsX4kfHa-L"),d("13ql8SvbkeXDKcnsm6AdeZ7MZBAYbP-2L"),d("1JpYT7v_8mkd-7U04NBkX4XX-37lo6Wy3"),d("1ccYHf9cDfewjOqQO-Ddm1RTzA2NVa_9A"),d("1Nd4voUcpXmjxlYlXqT4RWKM7CpPhTQC3"),d("1gaeGZ6ewPsz2nZNNaliFQmXmO16ouAxU"),d("1lPyHEv4rojtktwIaPMgOroLQkDHZsiA5"),d("1hmq1D_87yg0AXcDuK-qLdXenfRkldN0N"),d("1tNRYZQ4v5g6rWgwViX78v16TaEsWQ96A"),d("1rFRl9cFMBmpEciRoe181iVcOmS8AgPr-"),d("1FrWHA8eJ-YbG8fGteJPnxFH8g2GJHuwm"),d("1D_5UX3UsmRmr_Hp7nTNwSi4dNhw7_wxF")],
    polaroids: [], height: "185cm", bust: "99cm", waist: "77cm", hips: "96cm",
    shoes: "44/45", shirts: "M/L", pants: "30/32",
    eyes: "Green", hair: "Brown", nationality: "Egípcio", instagram: "https://www.instagram.com/karemalashry/",
    portfolio: "https://drive.google.com/drive/folders/1oL9XvmJPdEQiWDPWHX798wYxxHGcZZk4",
  },
  {
    id: "7", slug: "mateus-cunha", name: "Mateus Cunha", category: "masculino",
    coverImage: d("19-k9GN4fRLYzXJQBbzyn1t7WbaQSt8Ku"),
    images: [d("19-k9GN4fRLYzXJQBbzyn1t7WbaQSt8Ku"),d("133ZFjfaBhHba664lttLWbCTqjVzIWS6p"),d("1RMtgWqkPoYfHTqham2Y3VwWfdIjqgUZw"),d("11Nu5MYmMrmaP5VCz3tmmCqsChkXHLlqQ"),d("1BFjPtQzYxWHyAs1bXDJYuhDhVOOrkGKA"),d("1kOOrWcGJA9x6UHq7QaTAfNegmO7g4abr"),d("1kslTibmAit2WkFX22dXi6yvKl4QARqwG"),d("185daWdO2Z7LR8OeQCLwFGbHTnQjvZ76E"),d("1yTXPVydNmWA29d1MAoa2qkGVgcGWEIyA"),d("1zv-oZ-0gQRi6BGaGXBGEBo4fw_UA1hyr"),d("19-k9GN4fRLYzXJQBbzyn1t7WbaQSt8Ku"),d("1cd7Y-GNpgHDxqBkdZ33fKSEGpOfQz4qj"),d("1qQxCiPvuGqJHikwlWVvT3bKHXNBhq4rP"),d("1A7SUti7PsXOa8-1R8vnY2w-xqSwookIb"),d("1kLzG519W5eTJX_ZdS0HOtEgWsQIqUq71"),d("1o3VZWqs3iudT92TtkPhg8M7ej8amt_6D"),d("1ShwjAe3rYE8Ykty9H4lojMjky8sU11CO"),d("1E9R-6q7GNsK0j-hHZGjpy_ooCB1YrKna")],
    polaroids: [], height: "1,92m", bust: "98cm", waist: "78cm", hips: "95cm",
    shoes: "44/45", shirts: "M", pants: "32/34",
    eyes: "Dark Brown", hair: "Dark Brown", nationality: "Brasileiro", instagram: "https://www.instagram.com/tezezico/",
    portfolio: "https://drive.google.com/drive/folders/1JIOUE9n3oZ6JsoVFmOPbukSN9HWDHT9r",
  },
  {
    id: "17", slug: "nanda-feitosa", name: "Nanda Feitosa", category: "feminino",
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
    images: ["https://lh3.googleusercontent.com/d/1m_pSAKpNa6BUnoZZ6yO_OJ0-m4gRrqUF","https://lh3.googleusercontent.com/d/1xXs3wo9qKyx2DIEDLuKzzAp22UAJIVm_","https://lh3.googleusercontent.com/d/1q1vIn4RADd6tw5CDd8IfcY3xYivHu6zG","https://lh3.googleusercontent.com/d/18kR-iKJcacAnlg5bR-MFOOh3vXuQx4d6","https://lh3.googleusercontent.com/d/1kbLQ_AtnZFGyBy989UaeBt32JBr_xnaR","https://lh3.googleusercontent.com/d/1fLDQyS82W2_4uiufLhnJtv-kOOrf-T_4","https://lh3.googleusercontent.com/d/1HkzrkGgPOWjpElYl9scBg2qqxz46DRcC","https://lh3.googleusercontent.com/d/1wxzGPsJvJHqrbkdiOG1OFqlCRJoAwUL3","https://lh3.googleusercontent.com/d/1oM66gxOeIXDNqkpbidsdHGHEd4RkQENp","https://lh3.googleusercontent.com/d/1DEEnz5PNnO15ipxQgBXAFsd6j52EwooJ","https://lh3.googleusercontent.com/d/1LgNYNnYjMYChl7fQJz_oycaAUvaK5d_e","https://lh3.googleusercontent.com/d/1jZPv5GQeK4PzxW3Ie1xjwD2FPDcVX7xM","https://lh3.googleusercontent.com/d/13HrPbPjkfDQDRqFpZC8X32C5Vt7QMoZT","https://lh3.googleusercontent.com/d/1s9kbgADbpnzeO4w549EKndQGq59X0_5O","https://lh3.googleusercontent.com/d/1XY28KH2s3nDOzRXlDiRQ016qaGzRyxDS","https://lh3.googleusercontent.com/d/1Uy5U6AVH9ubJvAsZNdywP6KoSZ_tM97l","https://lh3.googleusercontent.com/d/1Vhnx2vddqbUnFWqa6iQ84_cUcEE7monx","https://lh3.googleusercontent.com/d/1d_-CVDREMZ4bRxEwdBwGMNXELAb-1HFI","https://lh3.googleusercontent.com/d/1BhymrKG08u6NE-3dNg2zb0fMEZIVaU63","https://lh3.googleusercontent.com/d/1YWPwH5iMcdzJRDL87UcrM2TwmRL2BJ-u","https://lh3.googleusercontent.com/d/1CJLIIZvIfz_eKmxR_aT31IU5w3aQSoYJ","https://lh3.googleusercontent.com/d/1ldAAQFBN3dcg0o5JdUV4KbJJ7kh8LVyh","https://lh3.googleusercontent.com/d/1wTYDdkt6n5SnCVAKb5Pg-3wxQce-xAbg","https://lh3.googleusercontent.com/d/12Infe3Ioe5FOAMFAOrCJH6J5THwywfNT","https://lh3.googleusercontent.com/d/1OyFoaWsFBr2xkO_nGw2DcjU0sJiXGG9A","https://lh3.googleusercontent.com/d/1LEdwaFPRmWb-JfgW9wJFe5C4FhNgKzIL","https://lh3.googleusercontent.com/d/1fPeVsz8pbk__R1oWLYvZJfHaNu1-ehIZ","https://lh3.googleusercontent.com/d/1q6BSDbVb6Klx-E9kgt5YCHeyuLe64v9l","https://lh3.googleusercontent.com/d/1mLhG2fnJ6KU2s6XyxCTsdBkCi748URY-","https://lh3.googleusercontent.com/d/1o2d7C1uxnDqQk1C74UGBHx_6ybHr3I3I","https://lh3.googleusercontent.com/d/1vFzpAAg0gRV02diosY6lAAQncYSnYSWT","https://lh3.googleusercontent.com/d/1bwjEFFME_OzJFp1maboX4rozxiWMpo-2","https://lh3.googleusercontent.com/d/1L9zrkqn8p0XMzJBhcJmHLR0K-1PHdS23","https://lh3.googleusercontent.com/d/1wmNmYoaz2VItoEzTYBZbSAeW6XC-QBSf","https://lh3.googleusercontent.com/d/1oeJG0RPAbasKfmEffDPPxrE89Hzn_ZyE","https://lh3.googleusercontent.com/d/1IzvaH5Btlw4f12bOjNGLbJkjAatCv2Ne","https://lh3.googleusercontent.com/d/124mEmTReZErUD6ZiH620reMa-T-n9-o_","https://lh3.googleusercontent.com/d/1VqKRJDyNbWGht5o3aZXf2hrnbgP-7cUQ","https://lh3.googleusercontent.com/d/1gO6yoCCYolPkorJi7L2YC39LEVTJGvOx","https://lh3.googleusercontent.com/d/1LLa3LnsD_gth2gg_cavNcyY1EusAfBZL","https://lh3.googleusercontent.com/d/1RWCOoZwB451IXQuuq8FNccbXqCPmHGOK","https://lh3.googleusercontent.com/d/1A3ixnVQSLVxghfYGxu_95Yy8ra6k9HOU","https://lh3.googleusercontent.com/d/1t6JwV3_dLj1VkXef5fsC1HhXG0hyhW5d","https://lh3.googleusercontent.com/d/1xBSMsQ9ffzuDSUzzVe1wpMwjs-seY3y2","https://lh3.googleusercontent.com/d/110IOEXlAEcjmI7luUb22BRh53WioJumP","https://lh3.googleusercontent.com/d/1257pdIsrsL4Oeq26iztDu-zqD8e4HRAt","https://lh3.googleusercontent.com/d/15hS4sjuynb51YyOAVXpa22kbCX5dYIpL","https://lh3.googleusercontent.com/d/1dPBy0HcDD3CFY2tBlWtCyEdNHGdnQCjn","https://lh3.googleusercontent.com/d/1h3ZPxQipoTbIOlB3uYxJ5DxAMDpQAYKr","https://lh3.googleusercontent.com/d/1tVC76Y5X2HpcaN-E-P9StCVgqQqPG3IT","https://lh3.googleusercontent.com/d/1sQDV47_mz166dtpdkKTok4bMNx-4kgZD","https://lh3.googleusercontent.com/d/1ZMKf3LJ6dathiBYNAFbjWmjjYp6LHzIS","https://lh3.googleusercontent.com/d/1FvDaWSY4R57pySTGVmpU-JPdRjok3m_y","https://lh3.googleusercontent.com/d/1AlU8KBkENri7cEEKjW7vrjq0_l-NtagG","https://lh3.googleusercontent.com/d/1lCGb0QBfKpdcE02WfShYqEPSts-o_K33","https://lh3.googleusercontent.com/d/19UBu4f7T_URcGtoZhoT93G1OUB72KVdd","https://lh3.googleusercontent.com/d/1Zcq4i8Rs3khiWccAwE_dzYe5N8pbtD1e","https://lh3.googleusercontent.com/d/1YDiiqSFQvzD9lgaPEEEdHIj8l9u2tB1l","https://lh3.googleusercontent.com/d/1fdQTUvzMmgIQIfK8AKaCqV-8tlgYi0cu","https://lh3.googleusercontent.com/d/1Xa_J5apHJtyuGVXHCIpg4mJ-nWLziVGf","https://lh3.googleusercontent.com/d/15R4FVwafcSz5EnTy3e5Of8IG-V7eqKoU","https://lh3.googleusercontent.com/d/1Cqa-kGH5aYfmfhKoP7KgewRxXN2Dy16E","https://lh3.googleusercontent.com/d/1Pvfqza1NiIkhzGCfSk28cO3jD4m_rqai","https://lh3.googleusercontent.com/d/1o6X0E4e2d798LxK6CjHk7wmJ7QKn_g5j","https://lh3.googleusercontent.com/d/1b2vi5IEGA-9m5IGkDmB8vi9y3fc2hgco","https://lh3.googleusercontent.com/d/1Eyk57TVMIXVGuKuKy5GdGoQPIelZROa5","https://lh3.googleusercontent.com/d/1pzNpH_OioSRgKHlgSNepKRylWwzolomS","https://lh3.googleusercontent.com/d/13AdSMb44Zg4vs4ogqh9TI-n2i40a4nWy","https://lh3.googleusercontent.com/d/1Dc0Vp4lbegFrUKILAtzLL5EWvgzjIhRh","https://lh3.googleusercontent.com/d/1tXywrK-2qXj-q1RAPyZf7NR-OZZ9--dF","https://lh3.googleusercontent.com/d/1HFqLRyLJmiWKxwcxIVDFAkSm-YbhHXJd"],
    polaroids: [], height: "170cm", bust: "82cm", waist: "63cm", hips: "92cm",
    shoes: "37",
    portfolio: "https://drive.google.com/drive/folders/1V85R6Fsbz902WbcdS_1dZJwasXwvM2fX",
  },
    {
    id: "18", slug: "stevie-jones", name: "Stevie Jones", category: "masculino",
    coverImage: "https://lh3.googleusercontent.com/d/10OS-AKtwvsVEq8RKWCLXG_pM4hw3zfZk",
    images: ["https://lh3.googleusercontent.com/d/10OS-AKtwvsVEq8RKWCLXG_pM4hw3zfZk","https://lh3.googleusercontent.com/d/11M1YTZJUqQWhkXeaw_x_V-vteYDBLy8d","https://lh3.googleusercontent.com/d/12eneG_5t0Z8K9V9-W77J8vCJMp-FXDwk","https://lh3.googleusercontent.com/d/14UKd7lDPbTGgVV3jrUjQTrId7m1KLeim","https://lh3.googleusercontent.com/d/1AstMXBWamwp9qmtt-f7sKbQo4q7ZQMix","https://lh3.googleusercontent.com/d/1Ctz7jvxuCX0P6vMywxFU-u6CajTxLRrW","https://lh3.googleusercontent.com/d/1FR7niwshMT7gTTSKWhBdCAOujUKB6Q1T","https://lh3.googleusercontent.com/d/1G37wqZHsSB5kemNJH_BrssPpyp-PYCG8","https://lh3.googleusercontent.com/d/1MBs1mig9Oiyn2toHEZCKciZp7Ba7hc7K","https://lh3.googleusercontent.com/d/1MrYkR0y_XrNsoGBYanfKwSqaMoO--HJt","https://lh3.googleusercontent.com/d/1S6ExwxzgHf09A3hyWjgOxhT_NkkQn3uS","https://lh3.googleusercontent.com/d/1TY_XT0o0KzV5TakZiW5YxcKaDX5xcYaV","https://lh3.googleusercontent.com/d/1Zvztz-wXt1peOpQJnm7lf7xl8t7fI0jR","https://lh3.googleusercontent.com/d/1_23oOgRttOfhQ2ykpQQTQ5b30oZAK4FW","https://lh3.googleusercontent.com/d/1bcNmgIORij3lTjaoPljizpLVgc40SIGd","https://lh3.googleusercontent.com/d/1gLm9u3pOuVvErNQY_-MW_CcCVAa9pMjM","https://lh3.googleusercontent.com/d/1jUowa95YdZDevQytoybwSJizk3sB-7ty","https://lh3.googleusercontent.com/d/1lPhVDTyrT-AA4zD5n9-nv0-_AtpMD8iQ","https://lh3.googleusercontent.com/d/1nrUfBSh_aHhxWA_RLsqvX8Zr-rUjsswd","https://lh3.googleusercontent.com/d/1o47odPYijVZjz8qaavbwKYivV9d98frM","https://lh3.googleusercontent.com/d/1qH92Uh_q8OXA8MetZMJRP-FXuhPdX6Ix"],
    polaroids: [], height: "183cm", bust: "98cm", waist: "76cm", hips: "97cm",
    shoes: "44", shirts: "S/M", pants: "44",
    eyes: "Dark Brown", hair: "Dark Brown", nationality: "Brasileiro",
    instagram: "https://www.instagram.com/ssteviejones/",
    portfolio: "https://drive.google.com/drive/folders/15tIPHFpxiR-RTNbQX79frEr7mj6nr3gI",
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
