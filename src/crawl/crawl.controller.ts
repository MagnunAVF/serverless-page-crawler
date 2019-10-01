import { Controller, Post, Res, Req, Body, HttpStatus } from '@nestjs/common';

const chromium = require('chrome-aws-lambda');

@Controller('crawl')
export class CrawlController {
  @Post()
  async create(@Req() req, @Res() res, @Body() body) {
    let response = {};
    let result = null;
    let browser = null;
    let statusCode = HttpStatus.OK;

    try {
      browser = await chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
      });

      let page = await browser.newPage();

      await page.goto(body.url);

      result = await page.title();

      const imgFile = '/tmp/result.png';
      await page.screenshot({path: imgFile});
    } catch (error) {
      console.log(`ERROR: ${error}`);
      statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    } finally {
      if (browser !== null) {
        await browser.close();
      }
    }

    res.status(statusCode).json(response);
  }
}
