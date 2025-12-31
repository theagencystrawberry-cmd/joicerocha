# 🚀 Guia: Conectar Projeto ao GitHub

## ✅ Status Atual
- ✅ Repositório Git inicializado
- ✅ Arquivos commitados localmente
- ✅ `.gitignore` criado

## 📝 Próximos Passos

### 1. Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login na sua conta
2. Clique no botão **"+"** no canto superior direito → **"New repository"**
3. Preencha os dados:
   - **Repository name**: `emagrecimento` (ou o nome que preferir)
   - **Description**: "Landing page - Desafio 30 Dias da Constância"
   - **Visibility**: Escolha **Public** ou **Private**
   - ⚠️ **NÃO** marque "Initialize this repository with a README" (já temos um)
   - ⚠️ **NÃO** adicione .gitignore ou license (já temos)
4. Clique em **"Create repository"**

### 2. Conectar Repositório Local ao GitHub

Após criar o repositório no GitHub, você verá uma página com instruções. Use uma destas opções:

#### Opção A: HTTPS (recomendado para iniciantes)
```bash
git remote add origin https://github.com/SEU_USUARIO/emagrecimento.git
git branch -M main
git push -u origin main
```

#### Opção B: SSH (se você já configurou chave SSH)
```bash
git remote add origin git@github.com:SEU_USUARIO/emagrecimento.git
git branch -M main
git push -u origin main
```

**⚠️ Importante:** 
- Substitua `SEU_USUARIO` pelo seu username do GitHub
- Substitua `emagrecimento` pelo nome do repositório que você criou

### 3. Fazer Push dos Arquivos

Execute os comandos (substituindo pela URL correta do seu repositório):

```bash
# Adicionar remote (substitua pela URL do seu repositório)
git remote add origin https://github.com/SEU_USUARIO/emagrecimento.git

# Renomear branch para main (padrão atual do GitHub)
git branch -M main

# Enviar arquivos para o GitHub
git push -u origin main
```

### 4. Autenticação

Se usar HTTPS, você precisará:
- **GitHub Personal Access Token** (recomendado) ou
- **Senha da conta** (pode não funcionar em alguns casos)

Para criar um Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Selecione escopos: `repo` (acesso completo a repositórios)
4. Copie o token gerado
5. Use o token como senha quando o Git pedir credenciais

## 🔄 Próximos Commits

Após a configuração inicial, para fazer novos commits:

```bash
# 1. Verificar status
git status

# 2. Adicionar arquivos modificados
git add .

# 3. Fazer commit
git commit -m "Descrição das alterações"

# 4. Enviar para o GitHub
git push
```

## 📋 Comandos Úteis

```bash
# Ver remotes configurados
git remote -v

# Ver histórico de commits
git log --oneline

# Ver diferenças antes de commitar
git diff

# Ver status atual
git status
```

## ❓ Problemas Comuns

### "remote origin already exists"
```bash
git remote remove origin
git remote add origin SUA_URL_AQUI
```

### "failed to push some refs"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Mudar URL do remote
```bash
git remote set-url origin NOVA_URL_AQUI
```

