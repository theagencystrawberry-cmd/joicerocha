# Landing Page - Desafio 30 Dias Constantes

Landing page moderna e responsiva para o nicho de emagrecimento e nutrição, desenvolvida com HTML5, CSS3 e JavaScript vanilla.

## 📁 Estrutura de Arquivos

```
.
├── index.html      # Estrutura HTML da landing page
├── styles.css      # Estilos CSS completos
├── script.js       # Funcionalidades JavaScript (carrossel e FAQ)
├── images/         # Pasta para as imagens
│   ├── An-De-00.webp até An-De-05.webp (carrossel)
│   └── Destaque3.webp (foto da expert)
└── README.md       # Este arquivo
```

## 🎨 Características

- **Design Responsivo**: Mobile-first, adaptável a todos os dispositivos
- **Tipografia**: Fonte Poppins (pesos 200-600)
- **Paleta de Cores**: Tons terrosos, nudes e cores de saúde
- **Carrossel Interativo**: Autoplay a cada 7 segundos com navegação manual
- **FAQ Accordion**: Perguntas frequentes com animação suave
- **Smooth Scroll**: Navegação suave entre seções

## 🖼️ Imagens Necessárias

A landing page espera as seguintes imagens na pasta `images/`:

- `An-De-00.webp` até `An-De-05.webp` (6 imagens para o carrossel - 552x515px)
- `Destaque3.webp` (Foto da expert - recomendado 500x600px)

**Nota**: Se as imagens não forem encontradas, placeholders serão exibidos automaticamente.

**Importante**: Coloque todas as imagens dentro da pasta `images/` que foi criada na raiz do projeto.

## 🚀 Como Usar

1. Coloque todos os arquivos na mesma pasta
2. Adicione as imagens mencionadas acima (opcional)
3. Abra o arquivo `index.html` em um navegador moderno
4. Personalize o conteúdo conforme necessário:
   - Substitua `[Nome da Expert]` pelo nome real
   - Ajuste textos e valores conforme sua oferta
   - Configure links de pagamento no botão CTA

## 📱 Seções da Landing Page

1. **Barra de Notificação Superior** - Mensagem de impacto fixa no topo
2. **Hero Section** - Dobra principal com CTA
3. **Identificação do Problema** - Agitação e dor do cliente
4. **A Solução** - Apresentação do método e 5 pilares
5. **Como Funciona** - Timeline do processo
6. **Diferenciais** - Quebra de objeções
7. **Resultados** - Carrossel de antes/depois + lista de conquistas
8. **Quem Sou Eu** - Autoridade e credibilidade
9. **Oferta** - Card de preço com destaque
10. **FAQ** - Perguntas frequentes em accordion
11. **Rodapé** - Copyright e avisos legais

## 🎯 Funcionalidades JavaScript

### Carrossel
- Exibe 3 imagens simultaneamente no desktop, 1 no mobile
- Autoplay a cada 7 segundos
- Navegação manual com botões de seta
- Pausa automática ao passar o mouse
- Responsivo e adaptável

### FAQ Accordion
- Abre/fecha ao clicar na pergunta
- Fecha automaticamente outros itens ao abrir um novo
- Animação suave de transição

### Smooth Scroll
- Navegação suave para âncoras internas
- Compensação automática para barra de notificação fixa

## 🎨 Personalização de Cores

As cores podem ser ajustadas no arquivo `styles.css` através das variáveis CSS:

```css
:root {
    --color-nude-light: #F5EFE5;
    --color-white: #FFFFFF;
    --color-brown-light: #C49A7B;
    --color-brown-dark: #4A2C1D;
    --color-green-mint: #4CD9A4;
    --color-coral: #FF7F50;
    --color-orange-gold: #FFA500;
}
```

## 📝 Próximos Passos

1. Substituir placeholders de imagens pelas imagens reais
2. Configurar link de pagamento no botão CTA principal
3. Adicionar Google Analytics ou pixel de rastreamento (se necessário)
4. Testar em diferentes navegadores e dispositivos
5. Otimizar imagens para web (compressão)
6. Configurar formulário de captura (se necessário)

## 🌐 Compatibilidade

- Chrome/Edge (últimas versões)
- Firefox (últimas versões)
- Safari (últimas versões)
- Navegadores mobile (iOS Safari, Chrome Mobile)

## 📄 Licença

Este projeto foi desenvolvido para uso específico. Personalize conforme suas necessidades.

