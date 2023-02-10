import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterContentType',
})
export class FilterContentTypePipe implements PipeTransform {
  transform(contentItem: Content[], filter?: String): any {
    var content: Content[] = [];
    if (contentItem.length == 0 || !filter) {
      return contentItem.reduce((prevContent, currentContent) => {
        if (currentContent.publisher) {
          prevContent.push(currentContent);
        }
        return prevContent;
      }, content);
    }

    return contentItem.reduce((prevContent, currentContent) => {
      if (
        typeof currentContent.title == filter?.toLowerCase() ||
        typeof currentContent.description == filter?.toLowerCase() ||
        typeof currentContent.creator == filter?.toLowerCase() ||
        typeof currentContent?.imageUrl == filter?.toLowerCase() ||
        typeof currentContent.type == filter?.toLowerCase() ||
        typeof currentContent.color == filter?.toLowerCase()||
        typeof currentContent.publisher == filter?.toLowerCase()

      ) {
        prevContent.push(currentContent);
      }
      return prevContent;
    }, content);
  }
}