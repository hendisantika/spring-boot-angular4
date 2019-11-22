package com.hendisantika.candidateapp.controller;

import com.hendisantika.candidateapp.dto.SearchData;
import com.hendisantika.candidateapp.entity.Candidate;
import com.hendisantika.candidateapp.service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Created by IntelliJ IDEA.
 * Project : candidate-app
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 03/11/17
 * Time: 05.40
 * To change this template use File | Settings | File Templates.
 */

@RestController
@RequestMapping("/api/candidate")
public class CandidateController {
    @Autowired
    private CandidateService service;

    @RequestMapping(method = RequestMethod.POST)
    public Candidate insert(@RequestBody Candidate candidate) {
        return service.insert(candidate);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Optional<Candidate> findById(@PathVariable String id) {
        return service.findById(id);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public boolean deleteById(@PathVariable String id) {
        return service.delete(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Candidate> findAll() {
        return service.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/search")
    public List<Candidate> findByName(@RequestBody SearchData searchData) {
        return service.findByName(searchData.getSearchKey());
    }
}
