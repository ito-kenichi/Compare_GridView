using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace xamarin.forms_project
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
            int imageindex = 0;
            for (int columnIndex = 0; columnIndex < 3; columnIndex++)
            {
                for (int rowIndex = 0; rowIndex < 2; rowIndex++)
                {
                    var image = new Image
                    {
                        Source = ImageSource.FromResource("xamarin.forms_project.images.image" + String.Format("{0:D3}", imageindex) + ".jpg"),
                        HorizontalOptions = LayoutOptions.Center,
                        VerticalOptions = LayoutOptions.Center,
                        WidthRequest = 120,
                        HeightRequest = 100,
                    };
                    grid.Children.Add(image, columnIndex, rowIndex);
                    imageindex++;
                }
            }
        }
    }
}
