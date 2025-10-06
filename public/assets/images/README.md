# Pasta de Imagens

Esta pasta é destinada para armazenar as imagens da clínica Mil Vacinas.

## Imagens Necessárias

### Logo da Clínica
- **Arquivo**: `logo.png` ou `logo.svg`
- **Tamanho recomendado**: 200x200px (mínimo)
- **Formato**: PNG com fundo transparente ou SVG
- **Descrição**: Logo oficial da clínica Mil Vacinas

### Fotos da Clínica
- **Arquivo**: `clinica-externa.jpg` - Foto da fachada da clínica
- **Arquivo**: `clinica-interna.jpg` - Foto do interior/recepção
- **Arquivo**: `sala-vacinacao.jpg` - Foto da sala de vacinação
- **Arquivo**: `equipe.jpg` - Foto da equipe médica

### Fotos dos Profissionais
- **Arquivo**: `medico-principal.jpg` - Foto do médico responsável
- **Arquivo**: `enfermeira.jpg` - Foto da enfermeira chefe
- **Descrição**: Fotos profissionais com fundo neutro

## Como Usar

1. **Substituir o Logo**:
   - Adicione o arquivo `logo.png` ou `logo.svg` nesta pasta
   - Descomente a linha no arquivo `src/components/Logo.jsx`:
   ```jsx
   <img src="/assets/images/logo.png" alt="Mil Vacinas" className="h-12 w-auto" />
   ```
   - Comente ou remova o SVG temporário

2. **Adicionar Fotos da Clínica**:
   - As fotos podem ser usadas em seções específicas do site
   - Formato recomendado: JPG ou PNG
   - Resolução: mínimo 800x600px para boa qualidade

## Otimização de Imagens

Para melhor performance do site:
- Comprima as imagens antes de usar
- Use formatos modernos como WebP quando possível
- Mantenha o tamanho dos arquivos abaixo de 500KB
- Use ferramentas como TinyPNG ou Squoosh para compressão

## Estrutura de Arquivos

```
public/assets/images/
├── logo.png              # Logo principal da clínica
├── logo.svg              # Logo em formato vetorial (alternativa)
├── clinica-externa.jpg   # Foto da fachada
├── clinica-interna.jpg   # Foto do interior
├── sala-vacinacao.jpg    # Sala de vacinação
├── equipe.jpg            # Foto da equipe
├── medico-principal.jpg  # Médico responsável
├── enfermeira.jpg        # Enfermeira chefe
└── README.md             # Este arquivo
```

## Notas Importantes

- Mantenha os nomes dos arquivos em minúsculas
- Use hífens (-) em vez de espaços nos nomes
- Certifique-se de ter os direitos de uso de todas as imagens
- Teste o site após adicionar novas imagens
