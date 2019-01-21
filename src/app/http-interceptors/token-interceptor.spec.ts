import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GithubService } from '../github.service';
import { TokenInterceptor } from './token-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import * as Interfaces from '../interfaces';
import * as MockData from '../mock-github-service-data';

describe(`TokenInterceptor`, () => {
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GithubService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true,
        },
      ],
    });

    service = TestBed.get(GithubService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should add an Authorization header', () => {
    const testData: Interfaces.IssueSearchResult = MockData.ISSUE_SEARCH;
    localStorage.setItem('token', 'test');
    service.getPullRequests('test').subscribe(response => {
      expect(response).toBeTruthy();
    });
    const httpRequest = httpMock.expectOne(
      req => req.method === 'GET' &&
      req.url === '/search/issues?q=type:pr+author:test');
    expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
    expect(httpRequest.request.headers.get('Authorization')).toEqual('Bearer test');
  });
});