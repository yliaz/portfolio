import {Plugin} from 'unified'

declare namespace RemarkVideoSupport {
  type VideoSupport = Plugin<[RemarkVideoSupportOptions?]>

  interface RemarkVideoSupportOptions {

  }
}

declare const remarkVideoSupport: RemarkVideoSupport.VideoSupport;

export = remarkVideoSupport;