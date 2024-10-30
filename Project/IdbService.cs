using System.ServiceModel;
using System.ServiceModel.Web;

namespace Project
{
    [ServiceContract]
    public interface IdbService
    {
        [OperationContract]
        [WebInvoke(Method = "GET", ResponseFormat = WebMessageFormat.Json, UriTemplate = "getscreendata?tableName={tableName}")]
        screenData[] getScreenData(string tableName);
    }
}