/**
 * Version: Nightly 2025-07-11
 * 
 * source: https://github.com/ruffle-rs/ruffle/blob/347a129e17ed5ee106f761241c2915f1775d7067/web/packages/core/src/public/config/index.ts
 */


/**
 * The Config module contains all the types that Ruffle uses for movie configs.
 *
 * The main interface of interest here is {@link BaseLoadOptions}, which you can apply to `window.RufflePlayer.config`
 * to set the default configuration of all players.
 *
 * @module
 */

export * from "./default";
export * from "./load-options";