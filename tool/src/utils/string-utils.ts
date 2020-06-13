export class StringUtils {

	static isEmpty(src: any) {
		return !src;
  }

	static isNotEmpty(src: string) {
		return !StringUtils.isEmpty(src);
	}
}
