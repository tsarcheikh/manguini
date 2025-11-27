# Script pour créer le dépôt GitHub et pousser le code

Write-Host "=== Configuration du dépôt GitHub pour Manguini ===" -ForegroundColor Cyan

# Vérifier si le dépôt distant existe déjà
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    Write-Host "Un dépôt distant existe déjà: $remoteExists" -ForegroundColor Yellow
    $continue = Read-Host "Voulez-vous le remplacer? (o/n)"
    if ($continue -eq "o" -or $continue -eq "O") {
        git remote remove origin
    } else {
        Write-Host "Opération annulée." -ForegroundColor Red
        exit
    }
}

# Instructions pour créer le dépôt
Write-Host "`nÉTAPE 1: Créez le dépôt sur GitHub" -ForegroundColor Green
Write-Host "1. Allez sur https://github.com/new" -ForegroundColor White
Write-Host "2. Nom du dépôt: manguini" -ForegroundColor White
Write-Host "3. Description: Manguini est une plateforme innovante qui connecte les professionnels (artisans, livreurs, etc.) avec des clients" -ForegroundColor White
Write-Host "4. Choisissez Public ou Private" -ForegroundColor White
Write-Host "5. NE PAS cocher 'Initialize this repository with a README'" -ForegroundColor Yellow
Write-Host "6. Cliquez sur 'Create repository'" -ForegroundColor White

Write-Host "`nAppuyez sur Entrée une fois le dépôt créé sur GitHub..." -ForegroundColor Cyan
Read-Host

# Ajouter le remote et pousser
Write-Host "`nÉTAPE 2: Configuration du dépôt distant..." -ForegroundColor Green
git remote add origin https://github.com/tsarcheikh/manguini.git

Write-Host "`nÉTAPE 3: Poussage du code vers GitHub..." -ForegroundColor Green
git branch -M main
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Succès! Votre code a été poussé vers GitHub!" -ForegroundColor Green
    Write-Host "Dépôt disponible sur: https://github.com/tsarcheikh/manguini" -ForegroundColor Cyan
} else {
    Write-Host "`n❌ Erreur lors du push. Vérifiez votre connexion et vos identifiants GitHub." -ForegroundColor Red
    Write-Host "Assurez-vous d'avoir créé le dépôt sur GitHub et que vos identifiants sont corrects." -ForegroundColor Yellow
}

