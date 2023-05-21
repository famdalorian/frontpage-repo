import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

export const socialLogins = ["discord", "google"];

export const magic = new Magic("pk_live_71FB438198D67606", {
  extensions: [new OAuthExtension()],
});
