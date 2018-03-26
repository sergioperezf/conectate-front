import { TestBed, inject } from '@angular/core/testing';
import { HomelistService } from './homelist.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';


describe('HomelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomelistService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('Creacion de instancia del servicio', inject([HomelistService], (service: HomelistService) => {
    expect(service).toBeTruthy();
  }));

  it(
    'Traer datos de las herramientas',
    inject(
      [HttpTestingController, HomelistService],
      (httpMock: HttpTestingController, dataService: HomelistService) => {
        const toolsObjectMock = [
          {
            'id':1,
            'name':'Moodle',
            'keyWords':'Platafora web',
            'pedagogicStrategy':'Online',
            'description':'Aprendizaje virual'
          },
          {
            'id':2,
            'name':'Sicua',
            'keyWords':'Platafora web',
            'pedagogicStrategy':'Foros',
            'description':'Foros viruales'
          }
        ];
        dataService.getTools().subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(toolsObjectMock);
          }
        });

        const mockReq = httpMock.expectOne(dataService.url);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(toolsObjectMock);

        httpMock.verify();
      }
    )
  );
});
