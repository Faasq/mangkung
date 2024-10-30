using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using
 System.Text;
using System.Web.Configuration;

namespace
 Project
{
    public class dbService : IdbService
    {
        public screenData[] getScreenData(string tableName)
        {
            List<screenData> retVal = new List<screenData>();
            SqlConnection conn = new SqlConnection(WebConfigurationManager.ConnectionStrings["strconn"].ConnectionString);

            SqlCommand cmd = new SqlCommand(
                $"SELECT id, name, people_count, senior_people_count, emails_count, " +
                $"personal_emails_count, phones_count, investors_count, clients_count, partners_count " +
                $"FROM {tableName}", conn);

            conn.Open();
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                retVal.Add(ReadData(rdr));
            }
            rdr.Close();
            conn.Close();

            return retVal.ToArray();
        }

        private screenData ReadData(SqlDataReader rdr)
        {
            throw new NotImplementedException();
        }
    }
}