mod fs;

use std::fs::{self as std_fs};

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

#[tauri::command]
fn open_file(path: &str) -> tauri::Result<Vec<u8>> {
    std_fs::read(path).map_err(tauri::Error::Io)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![open_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
