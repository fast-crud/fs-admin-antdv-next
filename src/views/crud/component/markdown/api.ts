import { requestForMock } from "#/api/request";

const request = requestForMock;
const apiPrefix = "/mock/ComponentMarkdown";

export function GetList(query: any) {
  return request({
    url: apiPrefix + "/page",
    method: "post",
    data: query
  });
}

export function AddObj(obj: any) {
  return request({
    url: apiPrefix + "/add",
    method: "post",
    data: obj
  });
}

export function UpdateObj(obj: any) {
  return request({
    url: apiPrefix + "/update",
    method: "post",
    data: obj
  });
}

export function DelObj(id: any) {
  return request({
    url: apiPrefix + "/delete",
    method: "post",
    params: { id }
  });
}
