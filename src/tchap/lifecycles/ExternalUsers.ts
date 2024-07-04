
export enum ExternalUsersLifecycle {
    AddRoom = "add_room",
}

export type ExternalUsersOpts = {
    domain: String;
};

export type AddRoomListener = () => void;
