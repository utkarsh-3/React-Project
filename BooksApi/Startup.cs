using ClientsApi.Models;
using ClientsApi.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;

namespace ClientsApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("Policy",
                    builder =>
                    {
                        builder.WithOrigins("https://localhost:44326")
                                 .AllowAnyMethod()
                                 .AllowAnyHeader()
                              .AllowCredentials();
                    });
            });

                services.Configure<ClientDatabaseSettings>(
            Configuration.GetSection(nameof(ClientDatabaseSettings)));

            

            services.AddSingleton<IClientDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<ClientDatabaseSettings>>().Value);

            
           services.AddSingleton<IClientRepository<Client>, ClientService>();
           // services.AddSingleton<ClientService>();

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(x => x.WithOrigins("https://localhost:44326").AllowAnyMethod().AllowAnyHeader());

            app.UseEndpoints(endpostrings =>
            {
                endpostrings.MapControllers();
            });
        }
    }
}
