$file = 'd:\dbizwebsite-1da7caed-main\src\index.css'
$content = Get-Content $file -Raw -Encoding UTF8

# Identifying the old text hover color
$oldTextColor = ".uiverse-fill-card:hover .uiverse-fill-content {`r`n  color: #0c1222;`r`n}"
$newTextColor = ".uiverse-fill-card:hover .uiverse-fill-content {`r`n  color: #ffffff;`r`n}"

# Identifying the old background block
$oldBgBlock = ".uiverse-fill-card::before {`r`n  content: \"\";`r`n  position: absolute;`r`n  right: 0;`r`n  bottom: 0;`r`n  width: 6px;`r`n  height: 100%;`r`n  background: linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%), radial-gradient(at top left, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%);`r`n  background-blend-mode: screen;`r`n  z-index: 1;`r`n  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);`r`n}"

$newBgBlock = ".uiverse-fill-card::before {`r`n  content: \"\";`r`n  position: absolute;`r`n  right: 0;`r`n  bottom: 0;`r`n  width: 6px;`r`n  height: 100%;`r`n  background: linear-gradient(to right, #d7d2cc 0%, #304352 100%);`r`n  z-index: 1;`r`n  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);`r`n}"

if ($content.Contains($oldBgBlock)) {
    $content = $content.Replace($oldBgBlock, $newBgBlock)
    $content = $content.Replace($oldTextColor, $newTextColor)
    Set-Content $file $content -Encoding UTF8 -NoNewline
    Write-Host "SUCCESS: New gradient applied to Statutory Form cards."
} else {
    Write-Host "FAIL: Target CSS block not found."
}
