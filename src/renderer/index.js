import Embedded from './Embedded';
import getImageComponent from '../renderer/Image';
import getCtaImageComponent from '../renderer/CtaImage';
import getVideoComponent from '../renderer/Video';


const getBlockRenderFunc = (config, customBlockRenderer) => (block) => {
  if (typeof customBlockRenderer === 'function') {
    const renderedComponent = customBlockRenderer(block, config, config.getEditorState);
    if (renderedComponent) return renderedComponent;
  }
  if (block.getType() === 'atomic') {
    const contentState = config.getEditorState().getCurrentContent();
    const entity = contentState.getEntity(block.getEntityAt(0));
    if (entity && entity.type === 'IMAGE') {
      return {
        component: getImageComponent(config),
        editable: false,
      };
    } else if (entity && entity.type === 'VIDEO') {
      return {
        component: getVideoComponent(config),
        editable: false,
      };
    } else if (entity && entity.type === 'CTA_IMAGE') {
      return {
        component: getCtaImageComponent(config),
        editable: false,
      };
    } else if (entity && entity.type === 'EMBEDDED_LINK') {
      return {
        component: Embedded,
        editable: false,
      };
    }
  }
  return undefined;
};

export default getBlockRenderFunc;
