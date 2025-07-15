import { open } from "@tauri-apps/plugin-dialog";

export async function openPicker(action: (picked: String) => void) {
    const picked = await open({
        multiple: false,
        directory: false,
        filters: [{ name: "Flash", extensions: ["swf"] }],
    });
    if (picked == null) {
        return;
    }
    action(picked);
}
