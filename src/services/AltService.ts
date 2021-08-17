export const emitAlt = (type: 'client' | 'server', event: string, parameters?: any) => {
  if ('alt' in window) {
    if (type == 'client') alt.emit(event, parameters || '');
    else alt.emit('emitServer', event, parameters || '');
  }
};

export const showCursor = (type: string) => {
  emitAlt('client', 'cef.cursor.show', type);
};

export const hideCursor = (type: string) => {
  emitAlt('client', 'cef.cursor.hide', type);
};
