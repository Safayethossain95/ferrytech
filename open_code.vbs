Set objShell = WScript.CreateObject("WScript.Shell")
objShell.CurrentDirectory = "D:\Safayet\BSS-Gitlab\Ferrytech"
objShell.Run "code .", 0, True
Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "cmd.exe /K cd /d D:\Safayet\BSS-Gitlab\Ferrytech && npm start"
