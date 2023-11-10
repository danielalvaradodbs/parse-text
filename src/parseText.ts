const parseText = ( text: string ) => {
    
    if( !text ) return '';
  
    return text.replace(/\s/g, '-')
    .normalize("NFD").replace(/[^\w\s-]/g, '')
    .toLowerCase().trim();
  
}

export const write = (textInput: HTMLInputElement, textToParsed: HTMLSpanElement) => {
    const parsedText = parseText(textInput.value.trim());
    textToParsed.textContent = parsedText;
}
