import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Enumerable from 'linq';
import * as dayjs from 'dayjs'
import { Dayjs } from 'dayjs';
import data from '../data/data.json';

type PR = {
  place: string,
  place_url: string,
  team: string,
  team_url: string,
  number: number,
  title: string,
  url: string,
  merged_at: Dayjs,
  updated_at: Dayjs,
  user_id: string,
  user_url: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'covid19-repo-monitor';
  items = [];
  lastUpdateAt: Dayjs;
  latestOnly = true;

  // get latestOnly(): boolean {
  //   return this._latestOnly;
  // }
  // set latestOnly(value: boolean) {
  //   this._latestOnly = value;
  // }

  get displayItems(): PR[] {
    if (this.latestOnly) {
      return Enumerable.from(this.items).distinct(pr => pr.team_url).toArray();
    } else {
      return this.items;
    }
  }

  get lastUpdateAtFormatted(): string {
    return this.lastUpdateAt?.format('YYYY/MM/DD HH:mm:ss') ?? '';
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.items = data.data.filter(pr =>
      !pr.user_url.startsWith('https://github.com/apps/github-actions') &&
      !pr.user_url.startsWith('https://github.com/apps/transifex-integration') &&
      pr.title !== 'Update data.json' &&
      pr.title !== 'Update news.json' &&
      pr.title !== 'Update summary.csv' &&
      pr.title !== 'data add' &&
      pr.title !== 'add data' &&
      !pr.title.startsWith('merge to staging') &&
      !pr.title.startsWith('データ更新')
    );

    this.lastUpdateAt = dayjs(data.last_update_at);
  }

  formatDate(value: Dayjs | string): string {
    if (typeof value === 'string') {
      return dayjs(value).format('YYYY/MM/DD HH:mm:ss');
    } else {
      return value.format('YYYY/MM/DD HH:mm:ss');
    }
  }
}
