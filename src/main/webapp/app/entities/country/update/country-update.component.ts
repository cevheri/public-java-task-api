import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IRegion } from 'app/entities/region/region.model';
import { RegionService } from 'app/entities/region/service/region.service';
import { ICountry } from '../country.model';
import { CountryService } from '../service/country.service';
import { CountryFormService, CountryFormGroup } from './country-form.service';

@Component({
  standalone: true,
  selector: 'jhi-country-update',
  templateUrl: './country-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class CountryUpdateComponent implements OnInit {
  isSaving = false;
  country: ICountry | null = null;

  regionsCollection: IRegion[] = [];

  protected countryService = inject(CountryService);
  protected countryFormService = inject(CountryFormService);
  protected regionService = inject(RegionService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: CountryFormGroup = this.countryFormService.createCountryFormGroup();

  compareRegion = (o1: IRegion | null, o2: IRegion | null): boolean => this.regionService.compareRegion(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ country }) => {
      this.country = country;
      if (country) {
        this.updateForm(country);
      }

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const country = this.countryFormService.getCountry(this.editForm);
    if (country.id !== null) {
      this.subscribeToSaveResponse(this.countryService.update(country));
    } else {
      this.subscribeToSaveResponse(this.countryService.create(country));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICountry>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(country: ICountry): void {
    this.country = country;
    this.countryFormService.resetForm(this.editForm, country);

    this.regionsCollection = this.regionService.addRegionToCollectionIfMissing<IRegion>(this.regionsCollection, country.region);
  }

  protected loadRelationshipsOptions(): void {
    this.regionService
      .query({ filter: 'country-is-null' })
      .pipe(map((res: HttpResponse<IRegion[]>) => res.body ?? []))
      .pipe(map((regions: IRegion[]) => this.regionService.addRegionToCollectionIfMissing<IRegion>(regions, this.country?.region)))
      .subscribe((regions: IRegion[]) => (this.regionsCollection = regions));
  }
}
