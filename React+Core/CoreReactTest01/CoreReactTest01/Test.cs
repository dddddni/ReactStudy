using CoreReactTest01.Models;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreReactTest01
{
    public class Test
    {
        public string ConnectString { get; set; }

        public Test(string connectionString)
        {
            this.ConnectString = connectionString;
        }

        private MySqlConnection GetConnection() 
        {
            return new MySqlConnection(ConnectString);
        }

        public List<Data> GetData()
        {
            List<Data> list = new List<Data>();
            string SQL = "SELECT * FROM Person ";
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(SQL, conn);

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new Data()
                        {
                            id = Convert.ToInt32(reader["id"]),
                            Name = reader["Name"].ToString(),
                            Age = Convert.ToInt32(reader["Age"]),
                            Phone = reader["Phone"].ToString(),
                            Email = reader["Email"].ToString()
                        });
                    }
                }
                conn.Close();
            }

            return list;
        }

        public void InsertData()
        {
            string SQL = "INSERT INTO Person(Name,Age,Phone,Email) VALUES('Choi',22,'010-3333-4444','choi@choi.com')";
            using (MySqlConnection conn = GetConnection())
            {
                try
                {
                    conn.Open();
                    MySqlCommand cmd = new MySqlCommand(SQL, conn);

                    if (cmd.ExecuteNonQuery() == 1)
                    {
                        Console.WriteLine("Insert Success!!");
                    }
                    else
                    {
                        Console.WriteLine("Insert Fail!!");
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine("DB Connection Faill!!!!!!");
                    Console.WriteLine(e.ToString());
                }
                conn.Close();
            }
        }

        public void DeleteData()
        {
            string SQL = "Delete FROM Person WHERE name='choi' ";
            using (MySqlConnection conn = GetConnection())
            {
                try
                {
                    conn.Open();
                    MySqlCommand cmd = new MySqlCommand(SQL, conn);

                    if (cmd.ExecuteNonQuery() == 1)
                    {
                        Console.WriteLine("Delete Success!!");
                    }
                    else
                    {
                        Console.WriteLine("Delete Fail!!");
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine("DB Connection Faill!!!!!!");
                    Console.WriteLine(e.ToString());
                }
                conn.Close();
            }
        }
    }
}
