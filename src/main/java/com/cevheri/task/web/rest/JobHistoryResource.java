package com.cevheri.task.web.rest;

import com.cevheri.task.domain.JobHistory;
import com.cevheri.task.repository.JobHistoryRepository;
import com.cevheri.task.service.JobHistoryService;
import com.cevheri.task.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.cevheri.task.domain.JobHistory}.
 */
@RestController
@RequestMapping("/api/job-histories")
public class JobHistoryResource {

    private final Logger log = LoggerFactory.getLogger(JobHistoryResource.class);

    private static final String ENTITY_NAME = "jobHistory";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final JobHistoryService jobHistoryService;

    private final JobHistoryRepository jobHistoryRepository;

    public JobHistoryResource(JobHistoryService jobHistoryService, JobHistoryRepository jobHistoryRepository) {
        this.jobHistoryService = jobHistoryService;
        this.jobHistoryRepository = jobHistoryRepository;
    }

    /**
     * {@code POST  /job-histories} : Create a new jobHistory.
     *
     * @param jobHistory the jobHistory to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new jobHistory, or with status {@code 400 (Bad Request)} if the jobHistory has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<JobHistory> createJobHistory(@RequestBody JobHistory jobHistory) throws URISyntaxException {
        log.debug("REST request to save JobHistory : {}", jobHistory);
        if (jobHistory.getId() != null) {
            throw new BadRequestAlertException("A new jobHistory cannot already have an ID", ENTITY_NAME, "idexists");
        }
        jobHistory = jobHistoryService.save(jobHistory);
        return ResponseEntity.created(new URI("/api/job-histories/" + jobHistory.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, jobHistory.getId().toString()))
            .body(jobHistory);
    }

    /**
     * {@code PUT  /job-histories/:id} : Updates an existing jobHistory.
     *
     * @param id the id of the jobHistory to save.
     * @param jobHistory the jobHistory to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated jobHistory,
     * or with status {@code 400 (Bad Request)} if the jobHistory is not valid,
     * or with status {@code 500 (Internal Server Error)} if the jobHistory couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<JobHistory> updateJobHistory(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody JobHistory jobHistory
    ) throws URISyntaxException {
        log.debug("REST request to update JobHistory : {}, {}", id, jobHistory);
        if (jobHistory.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, jobHistory.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!jobHistoryRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        jobHistory = jobHistoryService.update(jobHistory);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, jobHistory.getId().toString()))
            .body(jobHistory);
    }

    /**
     * {@code PATCH  /job-histories/:id} : Partial updates given fields of an existing jobHistory, field will ignore if it is null
     *
     * @param id the id of the jobHistory to save.
     * @param jobHistory the jobHistory to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated jobHistory,
     * or with status {@code 400 (Bad Request)} if the jobHistory is not valid,
     * or with status {@code 404 (Not Found)} if the jobHistory is not found,
     * or with status {@code 500 (Internal Server Error)} if the jobHistory couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<JobHistory> partialUpdateJobHistory(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody JobHistory jobHistory
    ) throws URISyntaxException {
        log.debug("REST request to partial update JobHistory partially : {}, {}", id, jobHistory);
        if (jobHistory.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, jobHistory.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!jobHistoryRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<JobHistory> result = jobHistoryService.partialUpdate(jobHistory);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, jobHistory.getId().toString())
        );
    }

    /**
     * {@code GET  /job-histories} : get all the jobHistories.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of jobHistories in body.
     */
    @GetMapping("")
    public ResponseEntity<List<JobHistory>> getAllJobHistories(@org.springdoc.core.annotations.ParameterObject Pageable pageable) {
        log.debug("REST request to get a page of JobHistories");
        Page<JobHistory> page = jobHistoryService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /job-histories/:id} : get the "id" jobHistory.
     *
     * @param id the id of the jobHistory to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the jobHistory, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<JobHistory> getJobHistory(@PathVariable("id") Long id) {
        log.debug("REST request to get JobHistory : {}", id);
        Optional<JobHistory> jobHistory = jobHistoryService.findOne(id);
        return ResponseUtil.wrapOrNotFound(jobHistory);
    }

    /**
     * {@code DELETE  /job-histories/:id} : delete the "id" jobHistory.
     *
     * @param id the id of the jobHistory to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJobHistory(@PathVariable("id") Long id) {
        log.debug("REST request to delete JobHistory : {}", id);
        jobHistoryService.delete(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
