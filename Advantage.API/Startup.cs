using System.IO;
using Advantage.API.Model;
using Advantage.API.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

namespace Advantage.API
{
    public class Startup
    {

        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;

        }
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddMvc();
            services.AddDbContext<ApiContext>(options =>
              options.UseSqlServer(Configuration.GetConnectionString("Mssql")));

            services.AddDbContext<DerogationContext>(options =>
               options.UseSqlServer(Configuration.GetConnectionString("Mssql")));

            services.AddCors(opt =>
        {
            opt.AddPolicy("CorsPolicy",
                c => c.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
        });

            services.AddControllersWithViews();
            services.AddTransient<DataSeed>();

            // Autoryzacja wersja uproszczona 

            services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
               .AddJwtBearer(options =>
               {
                   options.TokenValidationParameters = new TokenValidationParameters
                   {
                       ValidateIssuer = true,
                       ValidateAudience = true,
                       ValidateLifetime = true,
                       ValidateIssuerSigningKey = true,

                       ValidIssuer = "http://localhost:5000",
                       ValidAudience = "http://localhost:5000",
                       IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("superSecretKey@345"))
                   };
               });



            // Koniec autoryzacji 


            services.AddControllers();
            services.AddOpenApiDocument();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, DataSeed seed)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("CorsPolicy");
            app.UseHttpsRedirection();
            app.UseRouting();
            seed.SeedData(20, 1000);


            //  linie dotyczace zapisywania plikow 

            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions());
            // {
            //    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Resources")),
            //     RequestPath = new PathString("/Resources")
            // });

      
    

            // koniec linii 

            // Autoryzacje zabawa
            app.UseAuthentication();
            app.UseAuthorization();
            // Autoryzacje zabawa - koniec 
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });


            app.UseOpenApi();
            app.UseSwaggerUi3();
        }
    }
}