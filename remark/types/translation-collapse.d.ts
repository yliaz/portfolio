import {Plugin} from 'unified'

declare namespace RemarkTranslationCollapse {
  type TranslationCollapse = Plugin<[RemarkTranslationCollapseOptions?]>

  interface RemarkTranslationCollapseOptions {

  }
}

declare const remarkTranslationCollapse: RemarkTranslationCollapse.TranslationCollapse;

export = remarkTranslationCollapse;