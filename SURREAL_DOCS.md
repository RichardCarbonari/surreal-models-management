# Surreal Models Management — Documentação do Projeto
*Atualizado: Abril 2026*

---

## Stack & Repositório

| Item | Detalhe |
|------|---------|
| Framework | Next.js 14 (App Router), TypeScript, CSS Modules |
| Repo | https://github.com/RichardCarbonari/surreal-models-management |
| Deploy | Vercel (auto-deploy a cada git push) |
| Domínio | https://www.surrealmgmt.com.br |
| Pasta local | `~/Downloads/surreal-novo` |

---

## Estrutura de Arquivos

```
app/
  globals.css               → Variáveis CSS (cores, fontes)
  layout.tsx                → Navbar + BottomNav globais, Google Fonts
  page.tsx                  → Home (importa HomeClient)
  page.module.css           → CSS das colunas animadas
  portfolio/
    page.tsx                → /portfolio (Models)
    page.module.css
    [slug]/
      page.tsx              → /portfolio/[slug] página do modelo
      page.module.css
  casting/
    page.tsx                → /casting (By Surreal)
    page.module.css
  sobre/
    page.tsx                → /sobre (About)
    page.module.css
components/
  Navbar.tsx/module.css     → Logo "Surreal" centralizado + glassmorphism blur
  BottomNav.tsx/module.css  → Nav flutuante: Home | Models | By Surreal | About
  HomeClient.tsx            → 7 colunas animadas boomerang
  SplashScreen.tsx/css      → Splash branco com logo → shrink para navbar → home sobe
  Footer.tsx/module.css     → Rodapé (só em portfolio/casting/sobre)
  ModelBanner.tsx/module.css→ Página do modelo: fotos + medidas + instagram
  ModelCard.tsx/module.css  → Card no grid
  PortfolioGrid.tsx/module.css → Grid com filtros feminino/masculino/todos
data/
  models.ts                 → 22 modelos com fotos Drive + medidas
```

---

## Rotas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | 7 colunas animadas boomerang |
| `/portfolio` | Models | Grid de modelos com filtros |
| `/portfolio/[slug]` | Modelo | Página individual do modelo |
| `/casting` | By Surreal | Guia de fotos + formulário candidatura |
| `/sobre` | About | Sobre a agência + contato |

---

## Design System

| Variável | Valor | Uso |
|----------|-------|-----|
| `--black` | `#0a0a0a` | Textos principais |
| `--white` | `#faf9f7` | Fundos |
| `--olive` | `#4a5240` | Verde militar — destaque |
| `--olive-light` | `#6b7560` | Verde militar claro — hover |
| `--olive-muted` | `#8a9180` | Verde suave |
| `--gray-200` | `#e2e0db` | Bordas |
| `--gray-400` | `#9c9b94` | Textos secundários |
| `--gray-600` | `#5a5a54` | Corpo de texto |

**Fontes:**
- `Cormorant SC` Bold — Logo, títulos principais
- `Cormorant Garamond` — Display, itálicos
- `Montserrat` — Corpo de texto, labels

---

## Home — HomeClient.tsx

- **7 colunas** verticais com animação boomerang (vai e volta)
- Colunas alternando: ↑↓↑↓↑↓↑
- Velocidade: 80s linear
- Imagens embaralhadas diferente em cada coluna (shuffle por seed)
- **23 fotos específicas** da home (não dos modelos)
- **SplashScreen:** fundo branco + "Surreal" → logo shrink para navbar → home sobe
- `sessionStorage splashSeen`: splash só aparece uma vez por sessão

---

## Navbar

- Só logo "Surreal" centralizado
- Glassmorphism: `rgba(250,249,247,0.6)` + `backdrop-filter: blur(24px) saturate(180%)`
- Altura: 64px
- Sem links (navegação pelo BottomNav)

## BottomNav

- Flutuante em desktop E mobile
- Fundo escuro blur: `rgba(10,10,10,0.85)` + `backdrop-filter: blur(24px)`
- Items: **Home | Models | By Surreal | About**
- Item ativo: fundo `rgba(255,255,255,0.13)` + dot branco

---

## Modelos Cadastrados (22 total)

### Feminino (10)
| Nome | Slug | Fotos | Medidas |
|------|------|-------|---------|
| Clara Albuquerque | clara-albuquerque | 17 | ✅ |
| Fernanda Faleiro | fernanda-faleiro | 9 | ✅ |
| Florencia | florencia | 43 | ❌ |
| Giovana Peixoto | giovana-peixoto | 17 | ✅ |
| Helena Weber | helena-weber | 23 | ❌ |
| Iza Mazotti | iza-mazotti | 12 | ✅ |
| Jullie Rocha | jullie-rocha | 12 | ✅ |
| Nanda Peixoto | nanda-peixoto | 13 | ✅ |
| Renata Jamilly | renata-jamilly | 18 | ✅ |
| Samira Leopoldino | samira-leopoldino | 6 | ✅ |

### Masculino (12)
| Nome | Slug | Fotos | Medidas |
|------|------|-------|---------|
| Bernardo Balsanic | bernardo-balsanic | 12 | ✅ |
| Emad | emad | 13 | ✅ |
| Fernando Nascimento | fernando-nascimento | 13 | ❌ |
| Guilherme Cajaiba | guilherme-cajaiba | 13 | ✅ |
| Guss Camargo | guss-camargo | 14 | ✅ |
| Jhonny | jhonny | 27 | ❌ |
| Junior Benevides | junior-benevides | 12 | ✅ |
| Kareem | kareem | 14 | ✅ |
| Matheus Cunha | matheus-cunha | 18 | ✅ |
| Richard Carbonari | richard-carbonari | 15 | ✅ |
| Stevie Jones | stevie-jones | 21 | ❌ |
| Wagner Piazzoh | wagner-piazzoh | 12 | ✅ |

---

## Workflow de Atualização

```bash
cd ~/Downloads/surreal-novo
# fazer alterações
git add -A
git commit -m "descrição"
git push
# Vercel faz deploy automático em ~30s
```

---

## ⚠️ RETA FINAL — O que falta para finalizar

### 🔴 Crítico (bloqueante)
1. **Formulário de casting funcional** — Hoje usa `mailto:` que abre o app de email. Para envio direto precisa de chave Web3Forms (conta criada com `info@surrealmgmt.com.br`)
2. **Domínio sem www** — `surrealmgmt.com.br` (sem www) tem erro SSL. Só `www.surrealmgmt.com.br` funciona

### 🟡 Importante (próximas sessões)
3. **Medidas dos novos modelos** — Florencia, Helena Weber, Stevie Jones, Fernando Nascimento, Jhonny estão sem altura/medidas/instagram
4. **Modelos em desenvolvimento** — Nomes cadastrados sem fotos (aguardando fotos)
5. **SEO** — Metadata das páginas (og:image, description por modelo)
6. **Favicon** — Sem favicon personalizado

### 🟢 Nice to have
7. **Página de modelo** — Adicionar botão "Solicitar modelo" funcional (email)
8. **Analytics** — Google Analytics ou Vercel Analytics
9. **Instagram link** — Modelos sem @instagram preenchido
10. **Mais fotos na home** — Quanto mais fotos, menos repetição nas colunas

---

## DNS — Hostinger

| Tipo | Nome | Valor |
|------|------|-------|
| A | @ | 216.198.79.1 |
| CNAME | www | cname.vercel-dns.com |

**⚠️ Sem `www` tem erro SSL** — adicionar redirect no Vercel ou Hostinger

---

## Problemas Resolvidos

- Build timeout → `force-dynamic` em todas as páginas
- SSR error → componentes client separados
- Imagens Drive → `<img>` nativo + `unoptimized: true`
- JSX fragment error → `<>` wrapper quando múltiplos elementos root
- models.ts corrompido → reconstruído do zero com todos os 22 modelos
- Splash sessionStorage → `splashSeen = '1'` para não repetir na navegação
