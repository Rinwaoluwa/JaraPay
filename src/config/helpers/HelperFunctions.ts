export class HelperFunctions {

  static toCapitalized({ stringValue }: { stringValue: string }) {
    return stringValue.length > 0
      ? `${stringValue[0].toUpperCase()}${stringValue.substring(1)}`
      : "";
  }

  
  static uppercased({ stringValue }: { stringValue: string }) {
    const regex = ` +`;
    stringValue.replaceAll(regex, " ").split(' ').map((word) => HelperFunctions.toCapitalized({stringValue: word})).join(' ');
  }
}
//`^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'`