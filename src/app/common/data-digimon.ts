export interface DataDigimon {
    content: Content[];
    pageable: pageable;
  }
  
  export interface pageable {
    currentPage: number;
    elementsOnPage: number;
    totalElements: number;
    totalPages: number;
    previousPage: string;
    nextPage: string;
  }
  
  export interface Content {
    id: number;
    name: string;
    href: string;
    image: string;
  }
  
  