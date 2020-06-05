import * as RomiCore from '@osrf/romi-js-core-interfaces';
import React from 'react';

export interface DoorProps {
  door: RomiCore.Door;
  doorState?: RomiCore.DoorState;
  onOpenClick?(): void;
  onCloseClick?(): void;
}

export const Door = (props: DoorProps) => {
  const { door, doorState } = props;
  const modeString = doorState ? doorModeString(doorState.current_mode) : 'Unknown';
  return (
    <div>
      Door: {door.name}
      <br />
      State: {modeString}
      <br />
      <button>Open</button>
      <button>Close</button>
      <br />
      <br />
    </div>
  );
};

function doorModeString(doorMode: RomiCore.DoorMode): string {
  switch (doorMode.value) {
    case RomiCore.DoorMode.MODE_OPEN:
      return 'Open';
    case RomiCore.DoorMode.MODE_CLOSED:
      return 'Closed';
    case RomiCore.DoorMode.MODE_MOVING:
      return 'Moving';
    default:
      return 'Unknown';
  }
}

export default Door;
