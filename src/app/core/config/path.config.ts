import { environment } from 'src/environments/environment';

export class PathConfig {
  public static get API_ENDPOINT(): string { return environment.API_URL; }
  public static DUMMY_ENDPOINT = `${PathConfig.API_ENDPOINT}/test`;
}
