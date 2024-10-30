using System;

namespace Project
{
    internal class WebInvokeAttribute : Attribute
    {
        public string Method;
        public string UriTemplate;

        public object ResponseFormat { get; set; }
    }
}