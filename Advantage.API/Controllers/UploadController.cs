using System;
using System.IO;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;

namespace UploadFilesServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        [HttpPost("{kat}"), DisableRequestSizeLimit]
        public IActionResult Upload(string kat)
        {
            try
            {
                var file = Request.Form.Files[0];

                var folderName = Path.Combine("StaticFiles", "Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                var pathToSave1 = Path.Combine(pathToSave, kat);
                if (!Directory.Exists(pathToSave1)) Directory.CreateDirectory(pathToSave1);
                

                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    
                    var fullPath = Path.Combine(pathToSave1, fileName);
                    var dbPath = Path.Combine(folderName, fileName);
                    

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    return Ok(new { dbPath });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error" + ex.Message);
            }
        }
    }
}