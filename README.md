![GTA5_gbKnmxGfSH_2023_04_08](https://user-images.githubusercontent.com/53814896/230731764-20ba2e7d-3b6e-4951-aaca-16d93dfe5f8e.jpg)

# Notifications

Created by Rezondes

❤️ Geschrieben für Cops and Crimes <br>
- [Discord](http://discord.copsandcrimes.de/) <br>
- [Patreon](http://patreon.copsandcrimes.de/) <br>

⭐ Wenn dir dieses Repository geholfen hat!

# Beschreibung
Dieses Repository stellt eine alt:V-Ressource bereit, um dem Spieler einfache Benachrichtigungen anzuzeigen. <br>

## Installation
Fügen Sie einfach den Ordner `altv-rezondes-notifications` in ihren Serverordner `resources` und den Namen dieser Ressource zu Ihrer `server.toml` hinzu.

```
altv-rezondes-notifications
```

## Verwendung (Allgemein)
Am Ende wird immer diese Methode aufgerufen:
```javascript
function showNotification(type, msg, duration, titleText = "")
```

```C#
/// <param name="type">Farbe/param>
```
```javascript
enum NotificationTypeEnum 
{
  Error, // Rot
  Info, // Gelb
  Success, // Grün 
  Dispatch // Blau 
} 
```
```C#
/// <param name="msg">Nachricht, welche dem Spieler angezeigt wird</param>
/// <param name="duration">In Millisekunden</param>
/// <param name="title">Wenn nicht gesetzt => notificationType.ToString()</param>
```

## Verwendung unter Javascript
```javascript
// Client
alt.emit("Client:Notifications:Show", "Error", "Das Passwort ist nicht korrekt!", 5000);

// Server
alt.emitClient(player, "Client:Notifications:Show", "Error", "Das Passwort ist nicht korrekt!", 5000);
```
![GTA5_7xvY9qRYyi_2023_04_08](https://user-images.githubusercontent.com/53814896/230731682-c2bd230d-05ea-47fb-b715-21db4206ae4c.png)

```javascript
// Client
alt.emit("Client:Notifications:Show", "Success", "Erfolgreich eingeloggt!", 2500, "Login")

// Server
alt.emitClient(player, "Client:Notifications:Show", "Success", "Erfolgreich eingeloggt!", 2500, "Login");
```
![GTA5_cefEeRirFX_2023_04_08](https://user-images.githubusercontent.com/53814896/230731705-87b48d82-f948-4f2d-9d98-ee8b09bfd0ab.png)

```javascript
// Client
alt.emit("Client:Notifications:Show", "Success", "Erfolgreich eingeloggt!", 2500, "Login")

// Server
alt.emitClient(player, "Client:Notifications:Show", "Success", "Erfolgreich eingeloggt!", 2500, "Login");
```
![GTA5_CXlspxmcW4_2023_04_08](https://user-images.githubusercontent.com/53814896/230731710-fcf8405a-63b0-4d60-893d-139a204276ba.png)

```javascript
// Client
alt.emit("Client:Notifications:Show", "Success", "Erfolgreich eingeloggt!", 2500, "Login")

// Server
alt.emitClient(player, "Client:Notifications:Show", "Success", "Erfolgreich eingeloggt!", 2500, "Login");
```
![GTA5_ZVbfeG4CN2_2023_04_08](https://user-images.githubusercontent.com/53814896/230731723-d1bd6ded-3686-47bd-b887-3d8cf1993d80.png)

**Mehrere Benachrichtigungen werden übereinander gestapelt:**<br>
![GTA5_tZSkZtyHA9_2023_04_08](https://user-images.githubusercontent.com/53814896/230731741-d5396bca-face-49be-b814-bc074a3aa8cc.png)

## Verwendung unter C# (Serverside)

### Enum + statische Methode zur einfacheren Anwendung
```C#
public enum NotificationTypeEnum
{
  Error, // Rot
  Info, // Gelb
  Success, // Grün
  Dispatch // Blau
}

/// <summary>
/// Zum einfacherem nutzen von altv-notifications
/// </summary>
/// <param name="msg">Nachricht, welche dem Spieler angezeigt wird</param>
/// <param name="duration">In Millisekunden</param>
/// <param name="title">Wenn nicht gesetzt => notificationType.ToString()</param>
public static void ShowNotification(this IPlayer player, NotificationTypeEnum notificationType, string msg, int duration, string title = "")
{
  player.Emit("Client:Nofitications:Show", notificationType.ToString(), msg, duration, title);
}
```

### Beispiele
```C#
player.ShowNotification(NotificationTypeEnum.Error, "Das Passwort ist nicht korrekt!", 5000);
```
```C#
player.ShowNotification(NotificationTypeEnum.Info, "Dies ist ein Infotext!", 5000, "TestTitel");
```
```C#
player.ShowNotification(NotificationTypeEnum.Success, "Erfolgreich eingeloggt!", 2500, "Login");
```
```C#
player.ShowNotification(NotificationTypeEnum.Dispatch, "[911] Dispatch - Dispatchtext über einen flüchtigen Verbrecher!", 7500);
```
